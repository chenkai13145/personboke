import request from'@/request/request.js'

//post点滴主要
export function updata(data){
    return request({
        url:'/uploaddata',
        method:'post',
        data
    })
}
//分页获取点滴
export function getdi(data){
       return request({
           url:'/alldi',
           method:'get',
           params:data
       })
}

export function getinfoid(data){
    return request({
        url:'/infoid',
        method:'post',
        data
    })
}