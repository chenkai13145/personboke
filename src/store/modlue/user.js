import j from 'jwt-decode'
import {Toast} from 'vant'
const user={
    state: {
        users:localStorage.getItem('token')?j(localStorage.getItem('token')):{}
    },
    mutations: {
        saveToken(state,data){
             state.users=data.jwttoken;
             (data.done)()
             Toast('登录成功')
        },
        layout(state){
            state.users={}
            localStorage.removeItem('token')
            Toast('退出成功')
        }
    },
    actions: {
        saveToken({commit},data){
            commit('saveToken',data)
        },
        layout({commit}){
           commit('layout')
        }
    }
}
export default user;