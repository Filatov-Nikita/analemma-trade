<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar title="Push уведомления">
        <template #actions>
          <button :disabled="is('get content')" @click="readAll" class="tw-p-2">
            <svg class="tw-w-4 tw-h-4">
              <use xlink:href="/sprite.svg#check-all"></use>
            </svg>
          </button>
        </template>
      </Toolbar>
      <q-skeleton v-if="is('get cats')" class="tw-w-full" type="rect" height="60px" />
      <Tabs v-else-if="categories" class="tw-mb-6" fullWidth :tabs="categories" v-model="tab" />

      <q-skeleton v-if="is('get content') || is('get cats')" class="tw-w-full tw-mt-4" type="rect" height="250px" />
      <PushList v-else-if="items" :groups="groups" />
    </div>
  </q-page>
</template>

<script>
import PushList from 'components/PushList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  async created() {
    this.start('get cats');
    this.categories ?? await this.getCategories();
    this.end('get cats');
    this.tab = this.categories?.[0]?.value || null;
  },
  beforeUnmount() {
    return this.readAll(false);
  },
  data() {
    return {
      tab: null,
      items: null
    }
  },
  computed: {
    ...mapGetters('push', ['categories']),
    ...mapGetters('loaders', ['is']),
    groups() {
      if(!this.items) return null;
      const groups = {};
      this.items.forEach(item => {
        const [key] = item.date.split(' ');
        const el = groups[key];
        if(!el) groups[key] = [];
        const list = groups[key];
        list.push(item);
      });
      return groups;
    }
  },
  methods: {
    ...mapActions('push', ['getCategories']),
    ...mapActions('loaders', ['start', 'end']),
    async getList() {
      this.start('get content');
      this.items = await this.$store.dispatch('push/getList', {
        body: {
          section_id: this.tab,
          push_token: window.localStorage.getItem('pushToken')
        }
      });
      this.end('get content');
    },
    async readAll(showNotify = true) {
      const notify = () => showNotify ? this.$q.notify(
        {
          type: 'positive',
          message: 'Уведомления помечены как прочитанные'
        }
      ) : undefined;

      const canRead = this.items.some((i) => i.is_readed === '0');

      if(!canRead) {
        notify();
        return;
      };

      const formData = new FormData();
      this.items.forEach(i => {
        if(i.is_readed === '0') {
          formData.append('id[]', i.id)
        }
      });

      formData.append('push_token', window.localStorage.getItem('pushToken'));

      await this.$store.dispatch('push/read', { body: formData });

      this.items = this.items.map(i => ({ ...i, is_readed: 1 }));

      if(showNotify) notify();
    },
  },
  watch: {
    tab: {
      handler() {
        return this.getList();
      },
    }
  },
  components: {
    PushList
  }
}
</script>

<style>

</style>
