/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { store } from '../../store/store'

const BASE_HEADERS = "";
const validStatuses = [200, 201, 400];
const API_URL = process.env.VUE_APP_SERVER_URL;
const LOGOUT_URL = '';


export class ApiHelper {

    constructor() { }

    validateToken(uri, data = {}) {
        return axios.get(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(response => {
            localStorage.setItem("isAuthenticated", "true");
            return response;
        })
            .catch(error => {
                localStorage.setItem("isAuthenticated", "false");
                let err = new Error(error.response);
                return Promise.reject(err);
            })
    }


    uploadFilesAndLinks(uri, filesAndLinks = {}) {
        var formData = new FormData();
        formData.append('knowledgeBaseFiles', filesAndLinks.knowledgeBaseFiles);
        formData.append('facebookLinks', filesAndLinks.facebookLinks)
        return axios.post(`${API_URL}` + uri, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)


    }
    /*
    * Wraps axios and provides
    * more convenient get method
    * calls with data.
    */
    get(uri, data = {}) {
        // if (Object.keys(data).length > 0) {
        //   uri = `${uri}?${qs(data)}`
        // }
        return axios.get(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }
    /*
    * Wraps axios and provides
    * more convenient post method
    * calls with payload data
    */
    post(uri, data) {
        return axios.post(`${API_URL}` + uri, data, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
     * Wraps axios and provides
     * more convenient put method
     * calls with data
     */
    put(uri, data) {
        return axios.put(`${API_URL}` + uri, data, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
     * Wraps axios and provides
     * more convenient delete method
     */
    remove(uri) {
        return axios.delete(`${API_URL}` + uri, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(this.checkResponse)
            .catch(this.handleError)
    }

    /*
    * Wraps axios and provides
    * more convenient post method
    * calls with payload data
    */
    login(uri, data) {
        return axios.post(`${API_URL}` + uri, data, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(response => {
            // store.commit('setToken', response.headers['token'] ? response.headers['token'] : '');
            localStorage.setItem('token', response.data.token ? response.data.token : '');
            return response.data;
        }).catch(this.handleError)
    }


    logout(uri) {
        // store.commit('setToken', '');
        return axios.post(`${API_URL}` + uri, {}, {
            headers: this.getHeaders(),
            withCredentials: false
        }).then(response => {
            localStorage.removeItem('token');
            window.location.href = `${LOGOUT_URL}`;
        }).catch(this.handleError);
    }

    /*
    * Returns default headers list
    * which will be used with every request.
    */
    getHeaders(multipart = false) {
        let defaultHeaders = BASE_HEADERS
        if (multipart) {
            defaultHeaders = {}
        }
        if (localStorage.getItem('token')) {
            defaultHeaders = {
                'authorization': 'Bearer ' + localStorage.getItem('token'),
                ...defaultHeaders
            }
        }
        return defaultHeaders
    }

    /*
    * Wraps error responses from the API
    * and returns `Promise.reject` with error
    */
    checkResponse(response) {
        if (validStatuses.includes(response.status)) {
            return response.data
        }
        // If not authorized then reset token
        // and redirect to login page
        if (response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = `${LOGOUT_URL}`;
            return Promise.reject(new Error('USER_ANONYMOUS'))
        }
        else {
            store.commit('showApiError', true);
            let err = new Error(response.statusText)
            err.response = response
            return Promise.reject(err)
        }
    }

    handleError(error) {
        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    window.location.href = `${LOGOUT_URL}`;
                    return Promise.reject(new Error('USER_ANONYMOUS'))
                case 400:
                    return Promise.reject(error.response.data);
                case 404:
                    return Promise.reject(error.response.data);
                default:
                    store.commit('showApiError', true);
                    let err = new Error(error.response);
                    return Promise.reject(err);
            }
        } else {
            store.commit('showApiError', true);
            let err = new Error(error.response);
            return Promise.reject(err)
        }

    }
}