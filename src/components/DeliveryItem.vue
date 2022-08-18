<template>
  <div class="card-secondary tw-px-3 tw-py-4">
    <p class="tw-text-sm tw-mt-1 tw-px-2 tw-mb-3">{{ address }}</p>
    <AppButton size="base--rounded" @click="$emit('choose', { address, id })">
      Заберу отсюда
    </AppButton>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number
    },
    address: {
      required: true,
      type: String
    }
  },
  emits: ['choose']
}
</script>

<style>

</style>
