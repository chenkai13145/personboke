import request from'@/request/request.js'

export function getAll(){
    return request({
        url:'/all',
        method:'get'
    })
}