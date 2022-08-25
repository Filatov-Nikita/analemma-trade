<template>
  <q-page>
    <div class="safe-pt tw-absolute tw-right-3 tw-top-0">
      <button class="tw-block" @click="$router.back()">
        <svg class="tw-h-6 tw-w-6">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
    </div>

    <div class="tw-max-w-[280px] tw-mx-auto">
      <div class="guest tw-mb-10">
        <h1 class="guest__title tw-mb-1">Вход</h1>
        <p class="guest__subtitle">в личный кабинет</p>
      </div>
      <form>
        <AppInput
          class="tw-mb-8"
          name="test"
          label="Телефон"
          placeholder="8 (___) - __ - __ - ___"
          cellphone
          rules="required|cellphone"
        />
        <AppButton size="base">Продолжить</AppButton>
      </form>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>
