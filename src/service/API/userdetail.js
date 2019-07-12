import { Service } from '../service'

const service = new Service();

export class UserDetails {
    constructor() {
    }
    login(data) {
        const uri = "/index"
        return service.login(uri, data)
    }
    signUp(data) {
        const uri = "/username"
        return service.signUp(uri, data)
    }
}