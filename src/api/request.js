import axios from 'axios'
import { throwErr } from '@/utils'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

axios.interceptors.request.use(config => {
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
    }
    config.timeout = 10 * 1000
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(
    response => {
        if (response.data.code === 0) {
            return Promise.resolve(response.data)
        } else if (response.data.code === 1401) {
            store.dispatch('setUserInfo', {})
            Message({
                message: 'Login Please'
            })
            router.push('/login')
            return Promise.reject(response.data)
        } else {
            return Promise.reject(response.data)
        }
    },
    error => {
        if (error && error.response) {
            let res = {}
            res.code = error.response.status
            res.msg = throwErr(error.response.status, error.response)
            return Promise.reject(res)
        }
        return Promise.reject(error)
    }
)
export default function request(method, url, data) {
    method = method.toLocaleLowerCase()
    if (method === 'post') {
        return axios.post(url, data)
    } else if (method === 'get') {
        return axios.get(url, {
            params: data
        })
    } else if (method === 'delete') {
        return axios.delete(url, {
            data
        })
    } else if (method === 'put') {
        return axios.put(url, data)
    } else if (method === 'auth') {
        return axios.post(url, data)
    }
}