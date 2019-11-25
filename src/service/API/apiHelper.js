import axios from "axios";

const URL = process.env.VUE_APP_SERVER_URL;

export class Apihelper {
  post(uri, data) {
    return axios.post(`${URL}` + uri, data, {
      headers: {
        "content-Type": "application/json"
      }
    });
  }
  get(uri) {
    return axios
      .get(`${URL}` + uri, {
        headers: {
          "content-Type": "application/json"
        },
        withCredentials: false
      })
      .then(res => {
        var data = res;
        return data;
      })
      .catch(e => {
        console.log(e);
      });
  }
}
