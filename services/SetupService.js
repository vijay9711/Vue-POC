import {
    ApiHelper
} from "./helper/ApiHelper.js";

const apiHelper = new ApiHelper();

export class SetupService {
    constructor() { }

    getSetupFormDataForEmail() {
        const uri = '/api/auth/signup/form';
        return apiHelper.get(uri);
    }
    
    getSetupFormDataForSocialLink() {
        const uri = '/api/auth/signup/socialLoginForm';
        return apiHelper.get(uri);
    }

    validateEmail(email) {
        let emailData = {
            emailID: email
        }
        const uri = '/api/auth/verifyEmail'
        return apiHelper.post(uri, emailData);
    }


    uploadFilesAndLinks(filesAndLinks = {}) {
        const uri = '/api/upload/knowledgeBase'
        return apiHelper.uploadFilesAndLinks(uri, filesAndLinks);
    }


    getPlanList() {
        const uri = '/api/plans/list'
        return apiHelper.get(uri);
    }

    getLanguageList() {
        const uri = '/api/languages/list';
        return apiHelper.get(uri);
    }
    sendSelectedLanguages(data) {
        const uri = '/api/user/languages'
        return apiHelper.post(uri, data)
    }
    // createFlowDetails(detailsData){
    //     const uri = ''
    //     return apiHelper.post(uri, detailsData);
    // }
}