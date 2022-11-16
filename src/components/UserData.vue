<template>
  <div class="tw-bg-gray800 tw-divide-y tw-divide-[#E3E3E3] tw-rounded-xl">
    <div class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm">
      <Field name="last_name" placeholder="Фамилия" :value="lastname" />
    </div>
    <div class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm">
      <Field name="name" placeholder="Имя" :value="name" />
    </div>
    <div class="tw-py-3 tw-px-5 tw-text-dark tw-text-sm">
      <Field name="otch" placeholder="Отчество" :value="patronimyc" />
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
    lastname: {
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

<style scooed>
  input {
    background: transparent !important;
    display: block;
    width: 100%;
  }
</style>
