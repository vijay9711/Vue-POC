import {
    ApiHelper
} from "./helper/ApiHelper.js";

const apiHelper = new ApiHelper();

export class CreateFlowService {
    constructor() { }

    getChannelsList() {
        const uri = "/api/channels/list";
        return apiHelper.get(uri);

    }

}