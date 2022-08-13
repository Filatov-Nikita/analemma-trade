<template>
  <div class="tw-w-[86px]">
    <div v-if="!thumbSrc" class="tw-rounded-full tw-border tw-border-gray900 tw-w-[86px] tw-h-[86px] tw-relative">
      <span class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2">
        <svg class="tw-w-[50px] tw-h-[50px]">
          <use xlink:href="/sprite.svg#profile"></use>
        </svg>
      </span>

      <span class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-rounded-full tw-bg-gray800 tw-flex tw-items-center tw-justify-center tw-w-6 tw-h-6">
        <svg class="tw-w-[14px] tw-h-[14px]">
          <use xlink:href="/sprite.svg#camera"></use>
        </svg>
      </span>
      <input
        class="tw-opacity-0 tw-absolute tw-inset-0 tw-z-10"
        type="file"
        accept="image/*"
        @change="onChange"
      >
    </div>

    <div v-else class="tw-relative">
      <q-img class="tw-w-[86px] tw-h-[86px] tw-rounded-full" v-bind="{ src: thumbSrc }" />
      <input
        class="tw-opacity-0 tw-absolute tw-inset-0 tw-z-10"
        type="file"
        accept="image/*"
        @change="onChange"
      >
    </div>

    <div v-if="errorMessage" class="tw-text-[10px] tw-text-negative tw-leading-tight tw-mt-1 tw-text-center">
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { useField, Field } from 'vee-validate';
import { ref, onUnmounted } from 'vue';

export default {
  props: {
    ...Field.props,
    src: {
      default: undefined,
      type: String
    }
  },
  setup(props) {
    const input = useField(props.name, props.rules, {
      validateOnValueUpdate: true
    });

    const thumbSrc = ref(props.src || null);

    const isSrcBlob = (src) => {
      return typeof src === 'string' && src.startsWith('blob:');
    }

    const resetThumb = () => {
      if(isSrcBlob(thumbSrc.value)) URL.revokeObjectURL(thumbSrc.value);
      thumbSrc.value = props.src || null;
    }

    const createThumb = (e) => {
      const files = e.target.files;
      if(files.length <= 0) return;
      const src = URL.createObjectURL(files[0]);
      thumbSrc.value = src;
    }

    const onChange = async (e) => {
      input.handleChange(e);
      resetThumb();
      createThumb(e);
    }

    onUnmounted(() => {
      resetThumb();
    });

    return {
      thumbSrc,
      onChange,
      errorMessage: input.errorMessage,
    }
  }
}
</script>

<style>

</style>
