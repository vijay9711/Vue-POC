import axios from "axios";

const URL = "http://localhost:3001"

export class Service {
    login(uri) {
        return axios.get(`${URL}` + `${uri}`, {
            headers: {
                "content-Type": "application/json",
                // 'Access-Control-Allow-Origin': '*',
            },
            withCredentials: false,
        });
    }
    signUp(uri,data){
        return axios.post(`${URL}`+`${uri}`,data,{
            headers:{
                "content-Type": "application/json",
            }
        })
    }
}