import React, { useContext,useEffect } from 'react'
import { Button } from 'antd';

import {Newcontext} from "../context/index"
export const A_page = (props:any) =>{
    const context = useContext(Newcontext)
    const user = context?.user
    const demonum = context?.overallNum
    const dispatch = context?.dispatch
    // const routers =  props.location.pathname
    console.log('contextaaaaaaaaaa',context)
    useEffect(() => {   
        return () => {
            console.log('contextaaaaaaaaaauseEffect',context)
        }
    }, [])
    
    return <div>
        <Button type="primary" onClick={()=>{dispatch({type:'add',num:demonum})}}>增加</Button>
        <Button type="primary" onClick={()=>{dispatch({type:'down',num:demonum})}}>减少</Button>
        <span>这是a页面</span>
        <div style={{color:'red'}}>{demonum}</div>
    </div>
}