import { Service } from '../service'

const service = new Service();

export class UserDetails {
    constructor() {
    }
    login() {
        const uri = "/index"
        return service.login(uri)
    }
    signUp(data){
        const uri = "/username"
        return service.signUp(uri,data)
    }
}