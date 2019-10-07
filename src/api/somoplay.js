import request from './request'

const getAPI = "http://159.89.121.159:3008/somo/searchSomoplayWebByPageAndSection";  //GET
const otherAPI = "http://159.89.121.159:3008/somo/SomoplayWeb";  //POST PUT DELETE

export const getData = (params) => {
    return request('get', getAPI, params)
}

export const newData = (params) => {
    return request('post', otherAPI, params)    
}

export const deleteData = (id, params) => {
    return request('delete', `${otherAPI} + /${id}`, params)    
}

