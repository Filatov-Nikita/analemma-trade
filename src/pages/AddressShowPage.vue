<template>
  <q-page>
    <div class="wrapper">
      <Toolbar />
    </div>
    <q-dialog seamless :modelValue="true" position="bottom" class="dialog-bottom">
      <div class="tw-mb-10 tw-px-4">
        <div class="card-primary tw-bg-white tw-p-[6px]">
          <div class="card-secondary tw-p-4 tw-mb-2">
            {{ $store.state.address[id]?.name }}
          </div>
          <AppButton size="xl">Проложить маршрут</AppButton>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  }
}
</script>

<style>

</style>
