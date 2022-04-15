import * as api from "../config/api.js";
export function get(params) {
  return api.get("https://tupulung.wildani.com/api/events", params, null);
}
