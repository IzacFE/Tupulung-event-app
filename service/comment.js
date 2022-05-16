import * as api from "../config/api.js";

export function getComments(id) {
  return api.get(`https://tupulung.wildani.tech/api/events/${id}/comments`, {
    limit: 10,
    page: 1,
  });
}

export function postComments(id, body, headers) {
  return api.post(
    `https://tupulung.wildani.tech/api/events/${id}/comments`,
    null,
    headers,
    body
  );
}
