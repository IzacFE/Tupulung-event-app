import * as api from "../config/api.js";
export function get(params) {
  return api.get("https://tupulung.wildani.com/api/events", params, null);
}

export function getByID(id) {
  return api.get(`https://tupulung.wildani.com/api/events/${id}`, null, null);
}

export function searchEvent(params) {
  return api.get("https://tupulung.wildani.com/api/events", params, null);
}
