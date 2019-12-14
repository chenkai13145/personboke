import axios from 'axios'
const request=axios.create({
    baseURL:'/boke',
    timeout:60000
})
request.interceptors.request.use((config)=>{
    if(localStorage.getItem('token')){
       config.headers.Authorization=localStorage.getItem('token')
    }
    return config
},error=>{return Promise.reject(error)})

request.interceptors.response.use((response)=>{
    return response;
},(err)=>{
    const {status}=error.response;
    if(status=='401'){
        Message.error("token 失效请重新登录");
        localStorage.removeItem('token');
    }
    return Promise.reject(err)
})
export default request