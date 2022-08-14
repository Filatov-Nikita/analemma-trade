<template>
  <div>
    <div class="tw-w-[115px] tw-h-[115px] tw-mx-auto tw-mb-8">
      <span>
        <svg class="tw-w-full tw-h-full">
          <use xlink:href="/sprite.svg#profile"></use>
        </svg>
      </span>
    </div>

    <div class="tw-text-center">
      <router-link class="tw-text-[#2E2E2E] tw-text-2xl" :to="{ name: 'login' }">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
