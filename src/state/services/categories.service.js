import api from './api';

class CategoryService {
  getAll(query) {
    return api.get(`categories?${query}`);
  }

  get(id) {
    return api.get(`categories/${id}`);
  }

  create(data) {
    return api.post('categories', data);
  }

  update(id, data) {
    return api.patch(`categories/${id}`, data);
  }

  delete(id) {
    return api.delete(`categories/${id}`);
  }
}

export default new CategoryService();
