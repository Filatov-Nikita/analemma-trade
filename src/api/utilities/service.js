import Service from "src/api/utilities/server";

const api = new Service("https://analemmatrade.ru", {
  apiPath: "api",
  timeout: 10000,
});

export default api;
