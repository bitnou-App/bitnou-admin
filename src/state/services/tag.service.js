import api from './api';

class TagService {
  getAll(query) {
    return api.get(`tags?${query}`);
  }

  // get(id) {
  //   return api.get(`tags/${id}`);
  // }

  create(data) {
    return api.post('tags', data);
  }

  update(id, data) {
    return api.patch(`tags/${id}`, data);
  }

  delete(id) {
    return api.delete(`tags/${id}`);
  }
}

export default new TagService();
