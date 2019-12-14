import request from'@/request/request.js'

export function getAll(data){
    return request({
        url:'/all',
        method:'get',
        params:data
    })
}
export function postFa(data){
    return request({
        url:'/post',
        method:'post',
        data
    })
}
export function delpost(data){
    return request({
        url:'/delete',
        method:'post',
        data
    })
}