<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar title="Push уведомления">
        <template #actions>
          <button @click="markRead" class="tw-p-2">
            <svg class="tw-w-4 tw-h-4">
              <use xlink:href="/sprite.svg#check-all"></use>
            </svg>
          </button>
        </template>
      </Toolbar>

      <Tabs class="tw-mb-6" fullWidth :tabs="tabs" v-model="tab" />

      <TabsContent v-model="tab">
        <TabsContentItem name="all">
          <PushList :groups="groups" />
        </TabsContentItem>
        <TabsContentItem name="tab2">
          <PushList :groups="groups2" />
        </TabsContentItem>
        <TabsContentItem name="tab3">
          <PushList :groups="groups" />
        </TabsContentItem>
      </TabsContent>
    </div>
  </q-page>
</template>

<script>
import PushList from 'components/PushList.vue';

export default {
  data() {
    return {
      tab: 'tab2',
      tabs: [
        { label: 'Все', value: 'all' },
        { label: 'Рассылки', value: 'tab2' },
        { label: 'Изменения цен', value: 'tab3' },
      ],
      groups: {
        '12.05.2022': [
          {
            title: 'Заголовок1',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates tempora cupiditate cum unde ipsum earum quis quod ab aspernatur provident, nihil eveniet? Quas similique vero aut reprehenderit quae at.',
            read: false
          },
          {
            title: 'Заголовок1',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates tempora cupiditate cum unde ipsum earum quis quod ab aspernatur provident, nihil eveniet? Quas similique vero aut reprehenderit quae at.',
            read: false
          }
        ],
        '15.05.2022': [
          {
            title: 'Заголовок1',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates tempora cupiditate cum unde ipsum earum quis quod ab aspernatur provident, nihil eveniet? Quas similique vero aut reprehenderit quae at.',
            read: true
          }
        ]
      },
      groups2: {
        '12.05.2021': [
          {
            title: 'Заголовок1',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates tempora cupiditate cum unde ipsum earum quis quod ab aspernatur provident, nihil eveniet? Quas similique vero aut reprehenderit quae at.',
            read: false
          },
        ],
        '15.05.2022': [
          {
            title: 'Заголовок1',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptates tempora cupiditate cum unde ipsum earum quis quod ab aspernatur provident, nihil eveniet? Quas similique vero aut reprehenderit quae at.',
            read: true
          }
        ]
      }
    }
  },
  methods: {
    markRead() {
      [this.groups, this.groups2].forEach(this.read);

      this.$q.notify({
        type: 'positive',
        message: 'Уведомления помечены как прочитанные'
      });
    },
    read(groups) {
      for(let key in groups) {
        groups[key] = groups[key].map( item => ({ ...item, read: true }) );
      }
    }
  },
  components: {
    PushList
  }
}
</script>

<style>

</style>
