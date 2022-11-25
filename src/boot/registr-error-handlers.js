import { TimeoutError, HTTPError } from "ky";
import { Notify } from 'quasar';

export default ({ app, router }) => {
  window.addEventListener("unhandledrejection", ({ reason: err }) => {
    errorHandler(err);
  });

  window.addEventListener("error", (errMessage) => {
    console.error("global", errMessage);
  });

  app.config.errorHandler = (err, vm, info) => {
    errorHandler(err);
  };

  function errorHandler(err) {
    if (err instanceof TimeoutError) {
      return Notify({
        type: "negative",
        message: 'Истекло вреемя ожидания запроса',
      });
    } else if (err instanceof HTTPError) {
      if (err.response.status === 401) {
        Notify({
          type: "negative",
          message: 'Нет прав для соверщения этого действия',
        });
        return router.replace({ name: "auth.login" });
      } else if (err.response.status === 403) {
        return Notify({
          type: "negative",
          message: 'Нет прав для соверщения этого действия',
        });
      } else if (err.response.status === 404) {
        return Notify({
          type: "negative",
          message: 'Запрашиваемый ресурс не найден',
        });
      } else if (err.response.status === 429) {
        return Notify({
          type: "negative",
          message: 'В запросе есть недопустимые значения'
        });
      }

      return Notify({
        type: "negative",
        message: 'Произошла ошибка на сервере',
      });
    }

    console.error(err);
  }
};
