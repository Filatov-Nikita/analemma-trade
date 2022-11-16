<template>
  <div class="tw-space-y-[10px]">
    <div class="option">
      <p>Проба</p>
      <q-space />
      <p>{{ getValue(prop1, 'deg') }}</p>
    </div>
    <div class="option">
      <p>Номинальный вес</p>
      <q-space />
      <p>{{ getValue(prop2, 'g') }}</p>
    </div>
    <div class="option">
      <p>Высота и ширина</p>
      <q-space />
      <p>{{ size }}</p>
    </div>
    <div class="option">
      <p>Толщина</p>
      <q-space />
      <p>{{ getValue(prop2, 'mm') }}</p>
    </div>
    <div class="option">
      <p>Производитель</p>
      <q-space />
      <p v-html="prop5"></p>
    </div>
  </div>
</template>

<script>
const propType = {
  deg: '°',
  g: 'г',
  mm: 'мм',
}

export default {
  props: {
    //проба
    prop1: {
      required: true,
      type: String
    },
    // вес
    prop2: {
      required: true,
      type: String
    },
    // размеры
    prop3: {
      required: true,
      type: String
    },
    // толщина
    prop4: {
      required: true,
      type: String
    },
    // производитель
    prop5: {
      required: true,
      type: String
    },
  },
  methods: {
    getValue(val, propKey = null) {
      if(!propKey) return val;
      return val + propType[propKey];
    }
  },
  computed: {
    size() {
      const v = this.getValue;
      const [weight, height] = this.prop3.split('*');
      return `${v(weight, 'mm')} x ${v(weight, 'mm')}`
    }
  }
};
</script>

<style scoped>
  .option {
    @apply tw-flex tw-font-light;
  }

  .option .q-space {
    @apply tw-border-b tw-border-dashed tw-border-opacity-50 tw-mb-[6px] tw-mx-1;
  }
</style>
