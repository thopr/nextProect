import Axios from "axios";
import Cookies from "js-cookie";

const siteUrl = Cookies.get("siteUrl");
if (!siteUrl) {
  Cookies.set("siteUrl", "http://localhost:8000/", {
    expires: 60,
  });
}
let urls = {
  development: "http://localhost:8000/",
  production: "http://localhost:8000/",
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
