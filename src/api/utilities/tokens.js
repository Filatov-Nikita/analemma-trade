const storage = window.localStorage;

function setTokensData(token) {
  storage.setItem("token", token);
}

function getAccessToken() {
  const token = storage.getItem("token");
  return token;
}

function cleanTokensData() {
  storage.removeItem("token");
}

export { setTokensData, getAccessToken, cleanTokensData };
