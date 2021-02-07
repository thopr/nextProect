import Axios from "axios";
import Cookies from "js-cookie";

const siteUrl = Cookies.get("siteUrl");
if (!siteUrl) {
  Cookies.set("siteUrl", "https://localhost/currentrabwa/wp-json/", {
    expires: 60,
  });
}
let urls = {
  development: "https://localhost/currentrabwa/wp-json/",
  production: "https://localhost/currentrabwa/wp-json/",
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
