import React, { ReactNode } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
interface router {
    exact?:boolean,
    path:string
}
const Link_bn = (props: any):ReactNode => {
    return (
        <Button>
            <Link to={`${props.path}`} key={`${props.path}`}>
                {props.children}
            </Link>
        </Button>
    )
}
export default Link_bn