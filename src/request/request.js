import axios from 'axios'
const request=axios.create({
    baseURL:'/boke',
    timeout:60000
})

export default request