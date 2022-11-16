import Service from "src/api/utilities/server";

const api = new Service("https://analemmatrade.nabiullin.com", {
  apiPath: "api",
  timeout: 10000,
});

export default api;
