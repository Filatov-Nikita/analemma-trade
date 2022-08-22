import { Form, Field } from 'vee-validate';
import 'bottom-sheet-vue3/css/style.css';
import vClickOutside from 'click-outside-vue3';

export default ({ app }) => {
  app.use(vClickOutside);

  app.component('Toolbar', require('src/components/Toolbar.vue').default);
  app.component('Tabs', require('src/components/Tabs.vue').default);
  app.component('Carousel', require('src/components/Carousel.vue').default);
  app.component('CarouselSlide', require('src/components/CarouselSlide.vue').default);
  app.component('ProductItem', require('src/components/ProductItem.vue').default);
  app.component('TabsContent', require('src/components/TabsContent.vue').default);
  app.component('TabsContentItem', require('src/components/TabsContentItem.vue').default);
  app.component('QuotePrice', require('src/components/QuotePrice.vue').default);
  app.component('QuoteLabel', require('src/components/QuoteLabel.vue').default);
  app.component('ButtonHint', require('src/components/ButtonHint.vue').default);
  app.component('DialogHint', require('src/components/DialogHint.vue').default);
  app.component('AppButton', require('src/core/AppButton.vue').default);
  app.component('AppInput', require('src/core/AppInput.vue').default);
  app.component('AppErrorMsg', require('src/core/AppErrorMsg.vue').default);
  app.component('AppSelect', require('src/core/AppSelect.vue').default);
  app.component('Form', Form);
  app.component('Field', Field);
  app.component('BModal', require('src/core/BModal.vue').default);
}
