import { Apihelper } from "./API/apiHelper";

const apiHelper = new Apihelper();

export class UserDetails {
  constructor() {}
  login(data) {
    const uri = "/login";
    return apiHelper.post(uri, data);
  }
  signUp(data) {
    const uri = "/signUp";
    return apiHelper.post(uri, data);
  }
  getUser(data) {
    const uri = `/getUser/${data}`;
    return apiHelper.get(uri);
  }
}
