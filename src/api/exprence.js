import request from'@/request/request.js'

export function updata(data){
    return request({
        url:'/uploaddata',
        method:'post',
        data
    })
}