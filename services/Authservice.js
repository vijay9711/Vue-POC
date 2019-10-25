import { ApiHelper } from "./helper/ApiHelper";

const apiHelper = new ApiHelper();

export class AuthService {
  constructor() {}

  login(form) {
    const uri = `/api/auth/login`;
    return apiHelper.login(uri, form);
  }

  validateToken() {
    const uri = `/api/auth/verifyToken`;
    return apiHelper.validateToken(uri);
  }
  // createFlowDetails(detailsData){
  //     const uri = ''
  //     return apiHelper.post(uri, detailsData);
  // }
}
