import Axios from "axios";
import Cookies from "js-cookie";

const siteUrl = Cookies.get("siteUrl");
if (!siteUrl) {
  Cookies.set("siteUrl", "https://167.99.246.8/wp-json/", {
    expires: 60,
  });
}
let urls = {
  development:
    "http://localhost/new_rabwa_project/rabwa-coubon/wordpress/wp-json/",
  production: "https://167.99.246.8/wp-json/",
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
