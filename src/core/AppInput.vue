<template>
  <div class="tw-relative tw-pb-5" v-bind="{ class: $attrs.class }">
    <label
      class="tw-text-[#474747] tw-text-xs tw-mb-1"
      :class="[labelClass]"
      :for="name"
    >
      {{ label }}
    </label>

    <input
      v-maska="cellphone ? '8 (###) ### ## ##' : ''"
      v-bind="{ placeholder: $attrs.placeholder }"
      :id="name"
      class="tw-block tw-w-full tw-h-[47px] tw-px-4 tw-text-sm tw-font-medium tw-border-b tw-border-[#C5C6C6]"
      :class="[
        errorMessage
        ? 'tw-bg-negative tw-bg-opacity-10 tw-border-negative'
        : ''
      ]"
      type="text"
      v-model="value"
    />

    <div v-if="errorMessage" class="tw-flex tw-items-center tw-absolute tw-bottom-1">
      <span class="tw-mr-1">
        <svg class="tw-w-3 tw-h-3">
          <use xlink:href="/sprite.svg#warn"></use>
        </svg>
      </span>
      <span class="tw-text-negative tw-text-[10px] tw-leading-none">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { Field, useField } from 'vee-validate';
import { maska } from 'maska';

export default {
  inheritAttrs: false,
  props: {
    ...Field.props,
    cellphone: {
      default: false,
      type: Boolean
    },
    labelClass: {
      default: '',
      type: String
    }
  },
  directives: { maska },
  setup(props) {
    const input = useField(props.name, props.rules, {
      label: props.label,
      validateOnValueUpdate: true
    });

    return {
      value: input.value,
      errorMessage: input.errorMessage
    }
  }
}
</script>

<style>

</style>
