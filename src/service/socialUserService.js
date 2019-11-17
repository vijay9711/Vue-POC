import { Apihelper } from "./API/apiHelper.js";

const apiHelper = new Apihelper();

export class SocialUserService {
  constructor() {}
  getSocialUserDetails(data) {
    const uri = `/socialUser/${data}`;
    return apiHelper.get(uri);
  }
}
