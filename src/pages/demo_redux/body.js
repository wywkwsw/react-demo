import React from 'react'
import {connect} from 'react-redux'
const Demo_body = (props) => {
    return (
        <div>
        <div>body</div>
        <div>
            <ul>
                {props.propsList.map((item) => {
                    return (
                        <div key={item}>{item}</div>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log('mapStateToProps',state);
    
    return ({propsList:state.numList})}
export default connect(mapStateToProps)(Demo_body)