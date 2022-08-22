<template>
  <div class="tw-space-y-3">
    <div class="tw-flex">
      <div>
        <div class="tw-flex">
          <p class="tw-mb-[2px] tw-mr-1">Клубная цена:</p>
          <ButtonHint v-slot="{ showed, onChange }">
              <DialogHint :visible="showed" @update:visible="onChange">
                <div v-html="$store.state.hints.weight"></div>
              </DialogHint>
            </ButtonHint>
        </div>
        <p class="tw-text-xs tw-font-light tw-text-gray900">04.07.2022</p>
      </div>
      <q-space />
      <QuotePrice value="150р" diff="-10" diffPerc="-0.68%" />
    </div>
    <div class="tw-flex">
      <div>
        <p class="tw-mb-[2px]">Цена покупки:</p>
        <p class="tw-text-xs tw-font-light tw-text-gray900">04.07.2022</p>
      </div>
      <q-space />
      <QuotePrice value="150р" diff="-10" diffPerc="-0.68%" />
    </div>
    <div class="tw-flex">
      <div>
        <p class="tw-mb-[2px]">Цена выкупа:</p>
        <p class="tw-text-xs tw-font-light tw-text-gray900">04.07.2022</p>
      </div>
      <q-space />
      <QuotePrice value="150р" diff="-10" diffPerc="-0.68%" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
