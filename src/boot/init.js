export default ({ app, router }) => {
  app.config.globalProperties.$imgSrc = (src, defaultImg = null) => {
    return src ? 'https://analemmatrade.ru/' + src : defaultImg;
  }

  app.config.globalProperties.$curDate = () => {
    function f(num) {
      return num < 10 ? `0${num}` : num;
    }

    const dt = new Date();
    return `${f(dt.getDate())}.${f(dt.getMonth())}.${dt.getFullYear()}`
  }

  app.config.globalProperties.$price = (val) => {
    if(val === null) return '-';
    return val + '₽'
  }

  app.config.globalProperties.$numWord = (value, words) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num === 1) return words[0];
    return words[2];
  }

  app.config.globalProperties.$back = () => {
    const back = window.history.state.back;
    if(back === null) router.replace({ path: '/' });
    else router.back();
  }
}
