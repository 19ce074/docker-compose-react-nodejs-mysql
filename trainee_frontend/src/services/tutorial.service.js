import https from "../http-common";

class TutorialDataService {
  getAll() {
    return https.get("/api/tutorials");
  }

  get(id) {
    return https.get(`/api/tutorials/${id}`);
  }

  create(data) {
    return https.post("/api/tutorials", data);
  }

  update(id, data) {
    return https.put(`/api/tutorials/${id}`, data);
  }

  delete(id) {
    return https.delete(`/api/tutorials/${id}`);
  }

  deleteAll() {
    return https.delete(`/api/tutorials`);
  }

  findByTitle(title) {
    return https.get(`/api/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();