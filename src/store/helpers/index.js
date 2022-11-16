export function jsonToBody(obj) {
  const formData = new FormData();
  if(typeof obj !== 'object') return formData;
  for(let key in obj) {
    formData.append(key, obj[key]);
  }

  return formData;
}

export function cleanPhone(str) {
  str = str.replace(/[^0-9]/g, '');
  str = '7' + str.slice(1);
  if(!/^79[0-9]{9}$/.test(str)) return '';
  return str;
}

export function profitFormat(strNumber) {
  const num = parseFloat(strNumber);
  return num < 0 ? `${num}` : `+${num}`;
}
