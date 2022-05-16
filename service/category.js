import * as api from "../config/api.js";
// const API = "https://tupulung.wildani.com/api";
export function getCategories() {
  return api.get(`https://tupulung.wildani.tech/api/categories`, {
    limit: 5,
    page: 1,
  });
}
