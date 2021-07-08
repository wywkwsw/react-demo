import React from 'react'
import { Button } from 'antd';
import {connect} from 'react-redux'
import {Addlist, Downlist} from "../../redux/action"
const Demo_head = ({dispatch}) => {
    let n = 88
    const Add_List = () =>{
        console.log('增加')
        
        dispatch(Addlist(n++))
    }
    const Down_List = () =>{
        console.log('减少')
        dispatch(Downlist(1))
    }
    return (
        <div>
            <div>head</div>
            <Button type="primary" onClick={()=>Add_List()}>增加</Button>
            <Button type="primary" onClick={()=>Down_List()}>减少</Button>
        </div>

    )
}
export default connect()(Demo_head)