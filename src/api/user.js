import {request} from'@/request/request.js'

export function logReg(data){
      return request({
          url:'/logReg',
          method:'post',
          data
      })
}