import React from 'react'
import { Button } from 'antd';
import {FIlTER_SIGUR,FILTER_EVENNUMBERS} from "../../redux/action"
import { connect } from 'react-redux';
const Demo_footer = ({dispatch}) => {
    const singular = () => {
        console.log('单数');
        dispatch(FIlTER_SIGUR())
    }
    const evenNumbers = () => {
        console.log('双数');
        dispatch(FILTER_EVENNUMBERS())
    }
    return (
        <div>
        <div>footer</div>
        <Button  type="primary" onClick={()=>singular()}>单数</Button>
        <Button  type="primary" onClick={()=>evenNumbers()}>双数</Button>
        </div>
    )
}

export default connect()(Demo_footer)