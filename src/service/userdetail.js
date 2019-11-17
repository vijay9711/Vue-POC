import { Apihelper } from "./API/apiHelper";

const apiHelper = new Apihelper();

export class UserDetails {
  constructor() {}
  login(data) {
    const uri = "/index";
    return apiHelper.post(uri, data);
  }
  signUp(data) {
    const uri = "/login";
    return apiHelper.post(uri, data);
  }
}
