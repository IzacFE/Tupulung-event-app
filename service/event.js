import * as api from "../config/api.js";
export function get(params) {
  return api.get("https://tupulung.wildani.tech/api/events", params, null);
}

export function getByID(id) {
  return api.get(`https://tupulung.wildani.tech/api/events/${id}`, null, null);
}

export function searchEvent(params) {
  return api.get("https://tupulung.wildani.tech/api/events", params, null);
}

export function getEventByCategory(params) {
  return api.get("https://tupulung.wildani.tech/api/events", params, null);
}

export function joinEvents(id, header) {
  return api.post(
    `https://tupulung.wildani.tech/api/events/join/${id}`,
    null,
    header
  );
}
