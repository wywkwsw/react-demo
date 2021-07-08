import React,{ useState } from "react"
import {LoginScree} from "./login"
import {RegisterScree} from "./register"
import {Card} from "antd"
export const Unauthenticated = () => {
    const [isRegister,SetisRegister] = useState(false)
    return <div style={{display:'flex',justifyContent:'center'}}>
        <Card>
        {
            isRegister?<RegisterScree/>:<LoginScree/>
        }
        <button onClick={()=>{SetisRegister(!isRegister)}}>切换</button>
        </Card>
        
    </div>
}