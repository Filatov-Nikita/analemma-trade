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
        address: 'Поле {field} должно быть в формате Московская, 1/1, 10',
        cellphone: 'Поле {field} заполнено неправильно',
        date: 'Поле {field} должно быть датой',
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

defineRule('address', function (value) {
  if(!value) return true;
  return /^(\w+),.?([\/\w]+),.?(\w+)$/i.test(value.trim());
});

defineRule('date', function (value) {
  if(!value) return true;
  // First check for the pattern
  if (value === null) return true;
  const pattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!pattern.test(value)) return false;
  // Parse the date parts to integers
  var parts = value.split(".");
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
});
