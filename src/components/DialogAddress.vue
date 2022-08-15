<template>
  <q-dialog position="bottom" class="dialog-bottom">
    <div class="tw-mb-24 tw-px-4">
      <div class="card-primary tw-bg-white tw-p-[6px]">
        <p class="card-primary__title tw-pt-3 tw-px-4 tw-mb-3">Наши адреса:</p>

        <router-link
          class="card-secondary tw-flex tw-items-center tw-py-6 tw-px-5 tw-mb-2 tw-text-sm"
          :to="{ name: 'address.show', params: { id: '1' } }"
        >
          <span class="tw-mr-2">{{ $store.state.address['1'].name }}</span>
          <q-space />
          <span>
            <svg class="tw-fill-[#A8A7AF] tw-w-[10px] tw-h-[10px]">
              <use xlink:href="/sprite.svg#arrow-right"></use>
            </svg>
          </span>
        </router-link>

        <router-link
          class="card-secondary tw-flex tw-items-center tw-py-6 tw-px-5 tw-mb-2 tw-text-sm"
          :to="{ name: 'address.show', params: { id: '2' } }"
        >
          <span class="tw-mr-2">{{ $store.state.address['2'].name }}</span>
          <q-space />
          <span>
            <svg class="tw-fill-[#A8A7AF] tw-w-[10px] tw-h-[10px]">
              <use xlink:href="/sprite.svg#arrow-right"></use>
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </q-dialog>
</template>

<script>
export default {};
</script>

<style>
</style>
