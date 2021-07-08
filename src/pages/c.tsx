import React, { useContext } from 'react'
import {Newcontext} from "../context/index"
export const C_page = () =>{
    const context = useContext(Newcontext)
    // console.log('contextccccccccccc',context)
    return <div>
        <span>这是c页面</span>
        <div style={{color:'red'}}>{context}</div>
    </div>
}