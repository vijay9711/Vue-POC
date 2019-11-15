import axios from "axios";

const URL = "http://localhost:3001";

export class Apihelper {
  post(uri, data) {
    return axios.post(`${URL}` + uri, data, {
      headers: {
        "content-Type": "application/json"
      }
    });
  }
}
