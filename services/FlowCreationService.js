import { ApiHelper } from './helper/ApiHelper';

const apiHelper = new ApiHelper();

export class FlowCreationService {
    constructor() {
    }

    getChannelList(){
        const uri = '/api/channels/list';
        return apiHelper.get(uri);
    }

    getSelectedChannels(){
        const uri = '/api/user/channel';
        return apiHelper.get(uri);
    }
}