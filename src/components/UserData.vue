<template>
  <div class="tw-bg-gray800 tw-divide-y tw-divide-[#E3E3E3] tw-rounded-xl">
    <div class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm">
      {{ surname }}
    </div>
    <div class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm">
      {{ name }}
    </div>
    <div
      class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm"
      :class="[patronimyc ? 'tw-text-dark' : 'tw-text-[#B0B0B0]']"
    >
      {{ patronimyc || 'Отчество' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    surname: {
      required: true,
      type: String
    },
    patronimyc: {
      default: undefined,
      type: String
    }
  }
}
</script>

<style>

</style>
