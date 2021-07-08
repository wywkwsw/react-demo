import { UserAuth } from "context/auth-context"
import React from "react"
import {ProjectListScreen} from "./screens/project-list"


export const AuthenticateApp = () =>{
    const {user,logout} = UserAuth()
    return <div>
       {user?<button onClick={logout}>退出登录</button>:''}
        <ProjectListScreen/>
    </div> 
}