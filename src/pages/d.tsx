import React, { useContext } from 'react'
import {Newcontext} from "../context/index"
export const D_page = () =>{
    const context = useContext(Newcontext)
    // console.log('contextddddddddddd',context)
    return <div>
        <span>这是d页面</span>
        <div style={{color:'red'}}>{context}</div>
    </div>
}