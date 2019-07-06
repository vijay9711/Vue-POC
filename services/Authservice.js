import { ApiHelper } from './helper/ApiHelper';

const apiHelper = new ApiHelper();

export class AuthService {
    constructor() {
    }

    login(form) {
        const uri = `/api/auth/login`;
        return apiHelper.login(uri, form);
    }

    validateToken() {
        const uri = `/api/auth/verifyToken`;
        return apiHelper.validateToken(uri);
    }

    signUpWithEmail(signUpData) {
        const uri = '/api/auth/signup';
        return apiHelper.post(uri, signUpData);
    }

    signUpWithSocialLink(signUpData) {
        const uri = '/api/auth/sociallogin/metadata';
        return apiHelper.post(uri, signUpData);
    }
    // createFlowDetails(detailsData){
    //     const uri = ''
    //     return apiHelper.post(uri, detailsData);
    // }
}