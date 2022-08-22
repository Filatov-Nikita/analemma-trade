<template>
  <CartItem count="2" cantRemove hideActions :prices="{ buyback: '14 500₽' }">
    <button
      class="tw-flex tw-items-center tw-w-full tw-py-2 tw-mt-3"
      @click="showDetails = !showDetails"
    >
      <p class="tw-text-xs tw-text-[#828282]">Заказ №ххххххх от 12.05.2021</p>
      <q-space />
      <span>
        <svg
          class="tw-w-3 tw-h-3 tw-fill-[#A8A7AF]"
          :class="[ showDetails ? '-tw-rotate-90' : 'tw-rotate-90' ]"
        >
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </span>
    </button>
    <div
      class="tw-pt-2 tw-text-xs tw-text-[#828282] tw-space-y-3"
      v-if="showDetails"
    >
      <div>
        <span>Количество:</span>
        <span>1</span>
      </div>
      <div>
        <span>Сумма:</span>
        <span>14 650₽</span>
      </div>
      <div>
        <span>Статус:</span>
        <span class="tw-font-bold tw-text-primary">Получен</span>
      </div>
    </div>
    <AppButton class="tw-mt-8" size="base--rounded" @click="sell = true">Продать</AppButton>
    <DialogProductSell v-model:visible="sell"/>
  </CartItem>
</template>

<script>
import CartItem from './CartItem.vue';
import DialogProductSell from './DialogProductSell.vue';

export default {
  data() {
    return {
      showDetails: false,
      sell: false
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
