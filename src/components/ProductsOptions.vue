<template>
  <div class="tw-space-y-[10px]">
    <div class="option">
      <p>Проба</p>
      <q-space />
      <p>999°</p>
    </div>
    <div class="option">
      <p>Номинальный вес</p>
      <q-space />
      <p>20г</p>
    </div>
    <div class="option">
      <p>Высота и ширина</p>
      <q-space />
      <p>32мм х 18.6мм</p>
    </div>
    <div class="option">
      <p>Толщина</p>
      <q-space />
      <p>1,78</p>
    </div>
    <div class="option">
      <p>Производитель</p>
      <q-space />
      <p>“ОАО Красцветмет”</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .option {
    @apply tw-flex tw-font-light;
  }

  .option .q-space {
    @apply tw-border-b tw-border-dashed tw-border-opacity-50 tw-mb-[6px] tw-mx-1;
  }
</style>
