import { Form } from 'vee-validate';

export default ({ app }) => {
  app.component('Toolbar', require('src/components/Toolbar.vue').default);
  app.component('Tabs', require('src/components/Tabs.vue').default);
  app.component('Carousel', require('src/components/Carousel.vue').default);
  app.component('CarouselSlide', require('src/components/CarouselSlide.vue').default);
  app.component('ProductItem', require('src/components/ProductItem.vue').default);
  app.component('TabsContent', require('src/components/TabsContent.vue').default);
  app.component('TabsContentItem', require('src/components/TabsContentItem.vue').default);
  app.component('QuotePrice', require('src/components/QuotePrice.vue').default);
  app.component('QuoteLabel', require('src/components/QuoteLabel.vue').default);
  app.component('AppButton', require('src/core/AppButton.vue').default);
  app.component('AppInput', require('src/core/AppInput.vue').default);
  app.component('Form', Form);
}
