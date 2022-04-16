import * as api from "../config/api.js";
export function getComments(id) {
  return api.get(`https://tupulung.wildani.com/api/events/${id}/comments`, {
    limit: 10,
    page: 1,
  });
}