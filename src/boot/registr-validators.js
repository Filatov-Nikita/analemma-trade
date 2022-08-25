import { defineRule } from 'vee-validate';
import { required, email, size } from '@vee-validate/rules';
import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

configure({
  generateMessage: localize({
    ru: {
          ...ru,
          messages: {
            ...ru.messages,
            email: 'Поле {field} должно быть электронным адресом',
            cellphone: 'Поле {field} заполнено неправильно'
          }
        },
  }),
});

setLocale('ru');

defineRule('required', required);
defineRule('email', email);
defineRule('size', size);
defineRule('cellphone', function (value) {
  if(!value) return true;
  return /^8 \(\d{3}\) \d{3} \d{2} \d{2}$/.test(value)
});
