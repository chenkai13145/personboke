import request from'@/request/request.js'

//post点滴主要
export function updata(data){
    return request({
        url:'/uploaddata',
        method:'post',
        data
    })
}
//分页获取点滴列表
export function getdi(data){
       return request({
           url:'/alldi',
           method:'get',
           params:data
       })
}
//获取单个点滴详情
export function getinfoid(data){
    return request({
        url:'/infoid',
        method:'post',
        data
    })
}
//编辑主要点滴
export function editmain(data){
    return request({
         url:'/editmain',
         method:'post',
         data
    })
}

//编辑主要点滴详情
export function editinfo(data){
    return request({
         url:'/editinfo',
         method:'post',
         data
    })
}
//添加详情
export function addinfo(data){
   return request({
        url:'/addinfo',
        method:'post',
        data
    })
}
//删除主要点滴
export function delmain(data){
    return request({
        url:'/delmain',
        method:'post',
        data
    })
}

//删除步骤详情
export function delinfo(data){
    return request({
        url:'/delinfo',
        method:'post',
        data
    })
}
