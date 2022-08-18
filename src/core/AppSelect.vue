<template>
  <Field v-slot="{ handleChange, errorMessage, field }" :label="label">
    <div class="tw-pb-5 tw-relative">

      <div class="tw-relative" v-click-outside="close">
        <div
          class="tw-rounded-[7px] tw-border tw-bg-white tw-px-3 tw-py-2 tw-min-h-[48px] tw-flex tw-items-center"
          :class="[ errorMessage ? 'tw-border-negative' : 'tw-border-black' ]"
          @click="onClick"
        >
          <div class="tw-flex tw-items-center tw-grow">
            <div class="tw-mr-3">
              <p class="tw-text-sm tw-font-medium tw-mb-[2px]">{{ field.value ? labelGetter(field.value) : label }}</p>
              <p
                v-if="field.value?.caption || caption"
                class="tw-text-[#979797] tw-font-light tw-text-[10px] tw-leading-tight tw-tracking-tighter"
              >
                {{ field.value?.caption || caption }}
              </p>
            </div>
            <q-space />
            <span>
              <svg class="tw-rotate-90 tw-w-3 tw-h-3" :class="{ '-tw-rotate-90': show }">
                <use xlink:href="/sprite.svg#arrow-right"></use>
              </svg>
            </span>
          </div>
        </div>

        <div
          v-if="show"
          class="tw-max-h-[200px] tw-overflow-scroll"
          :class="[ dropdownClasses, errorMessage ? 'tw-border-negative' : 'tw-border-black' ]"
        >
          <div
            v-for="(option, i) in options"
            :key="i"
            class="tw-p-2 active:tw-bg-gray800 last:tw-rounded-b-[7px] tw-text-xs tw-text-dark"
            @click="onChange(handleChange, option)"
          >
            {{ labelGetter(option) }}
          </div>
        </div>
      </div>

      <AppErrorMsg v-if="errorMessage">{{ errorMessage }}</AppErrorMsg>

    </div>
  </Field>
</template>

<script>

export default {
  props: {
    label: {
      required: true,
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    caption: {
      default: undefined,
      type: String
    },
    labelGetter: {
      default() {
        return (opt) => opt;
      },
      type: Function
    }
  },
  data() {
    return {
      show: false,
      dropdownClasses: '-tw-translate-y-[6px] tw-z-10 tw-absolute tw-w-full tw-top-full tw-left-0 tw-rounded-b-[7px] tw-divide-y tw-divide-gray800 tw-border tw-border-t-0 tw-bg-white'
    }
  },
  methods: {
    onClick() {
      this.show = !this.show;
    },
    onChange(handleChange, option) {
      handleChange(option);
      this.show = false;
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style>

</style>
