import React, { useContext } from 'react'
import {Newcontext} from "../context/index"
export const B_page = () =>{
    const context = useContext(Newcontext)
    const demonum = context?.overallNum
    console.log('contextbbbbbbbbbb',context)
    return <div>
        <span>这是b页面</span>
        <div style={{color:'red'}}>{demonum}</div>
    </div>
}