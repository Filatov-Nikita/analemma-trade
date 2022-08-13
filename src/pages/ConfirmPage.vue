<template>
  <q-page>
    <div class="tw-max-w-[280px] tw-mx-auto">
      <div class="guest tw-mb-10">
        <h1 class="guest__title tw-mb-1">Подтверждение</h1>
        <p class="guest__subtitle">на номер +7 (917) ХХ-ХХ-224 отправлен код</p>
      </div>
      <div class="tw-max-w-[280px] tw-mx-auto">
        <AppInput
          class="tw-mb-8"
          name="test"
          label="Телефон"
          placeholder="код из СМС"
          rules="required"
        />
        <AppButton size="base">Подтвердить</AppButton>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>
