<template>
  <div>
    <Form v-slot="{ values }">
      <section>
        <p class="tw-font-bold tw-text-xl tw-mb-4">Информация для заказа</p>
        <AppInput name="name" label="Имя*" rules="required" />
        <AppInput name="surname" label="Фамилия*" rules="required" />
        <AppInput name="cellphone" label="Номер телефона*" rules="required" />
        <AppInput name="email" label="e-mail*" rules="required|email" />
      </section>
      <section>
        <p class="tw-font-bold tw-text-xl tw-mb-4">Способ получения</p>
        <AppSelect
          rules="required"
          name="pay_method"
          label="Способ получения"
          :labelGetter="opt => opt.value"
          :options="[ { label: 't1', value: '1' }, { label: 't2', value: '2' } ]"
          caption="Заказа можно оплатить картой или наличными в офисе"
        />
      </section>
      <section>
        <p class="tw-font-bold tw-text-xl tw-mb-4">Выберите способ оплаты</p>
        <AppInput name="name" label="Имя*" rules="required" />
      </section>

      <slot name="total" />

      <div class="tw-flex tw-items-center tw-mb-5 tw-mt-3">
        <span class="tw-mr-3">
          <svg class="tw-w-[50px] tw-h-[50px]">
            <use xlink:href="/sprite.svg#attention"></use>
          </svg>
        </span>
        <span class="tw-font-light tw-text-sm">Для получения заказа при себе необходимо иметь паспорт</span>
      </div>

      <AppButton size="base--rounded">
        Оформить заказ
      </AppButton>
    </Form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
