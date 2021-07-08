import React from 'react'
import Demobody from './body'
import Demo_head from './head'
import Demo_footer from './footer'
import {InitList} from "../../redux/action"
import {connect} from 'react-redux'
const Demo_redux = ({dispatch}:any) => {
    console.log('dispatch',dispatch);
    
    const CreateInit = () =>{
        const Default = [1,2,3,4]
        dispatch(InitList(Default))
    }
    CreateInit()
    return (
        <div>
            <Demo_head></Demo_head>
            <Demobody></Demobody>
            <Demo_footer></Demo_footer>
        </div>
    )
}
export default connect()(Demo_redux)