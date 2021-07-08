import { UserAuth } from "context/auth-context"
import { error } from "node:console"
import qs from "qs"
import * as auth from '../auth-provider'
const apiUrl = process.env.REACT_APP_API_URL
 interface Config extends RequestInit{
     token?:string,
     data?:object
 }
export const http = async(endpoint:string,{data,token,headers,...customCofig}:Config = {}) =>{
    const config = {
        methods:'GET',
        headers:{
            Authorization:token?`Bearer ${token}`:'',
            'Content-Type':data?'application/json':''
        },
        ...customCofig
    }
    if(config.methods.toUpperCase() === 'GET'){
        endpoint += `?${qs.stringify(data)}`
    }else{
        config.body = JSON.stringify(data||{})
    }
    return window.fetch(`${apiUrl}/${endpoint}`,config)
    .then(async response =>{
        if(response.status === 401){
            await auth.logout()
            window.location.reload()
            return Promise.reject({message:'请重新登录'})
        }
        const data = await response.json()
        if(response.ok){
            return data
        }else{
            throw Promise.reject(data)
        }
    })
}

export const userHttp = () =>{
    const {user} = UserAuth()
    return (...[endpoint,config]:[string,Config]) =>http(endpoint,{...config,token:user?.token})
}