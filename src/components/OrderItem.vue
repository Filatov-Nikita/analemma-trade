<template>
  <CartItem :item="item" cantRemove hideActions>
    <button
      class="tw-flex tw-items-center tw-w-full tw-py-2 tw-mt-3"
      @click="showedDetails = !showedDetails"
    >
      <p class="tw-text-xs tw-text-[#828282]">Заказ №{{ item.order_id }} от {{ date }}</p>
      <q-space />
      <span>
        <svg
          class="tw-w-3 tw-h-3 tw-fill-[#A8A7AF]"
          :class="[ showedDetails ? '-tw-rotate-90' : 'tw-rotate-90' ]"
        >
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </span>
    </button>
    <div
      class="tw-pt-2 tw-text-xs tw-text-[#828282] tw-space-y-3"
      v-if="showedDetails"
    >
      <div>
        <span>Количество: </span>
        <span>{{ count }}</span>
      </div>
      <div>
        <span>Сумма: </span>
        <span>{{ $price(item.summ) }}</span>
      </div>
      <div>
        <span>Статус: </span>
        <span class="tw-font-bold tw-text-primary">{{ item.status }}</span>
      </div>
    </div>
    <AppButton class="tw-mt-8" size="base--rounded" @click="sell">Продать</AppButton>
    <DialogProductSell v-model:visible="showedSell" :item="item" />
  </CartItem>
</template>

<script>
import CartItem from './CartItem.vue';
import DialogProductSell from './DialogProductSell.vue';

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      showedDetails: false,
      showedSell: false
    }
  },
  computed: {
    count() {
      return parseInt(this.item.kol);
    },
    date() {
      const dt = new Date(this.item.order_date.date);
      return `${dt.getDate()}.${dt.getMonth()}.${dt.getFullYear()}`
    }
  },
  methods: {
    sell() {
      this.showedSell = true;
    }
  },
  components: {
    CartItem,
    DialogProductSell
  }
}
</script>

<style>

</style>
