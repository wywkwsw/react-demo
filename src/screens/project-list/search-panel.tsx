// import { UserAuth } from 'context/auth-context'
import React from 'react'
import {Input,Select} from 'antd'
// const {logout} = UserAuth()
// import {useEffect,useState} from 'react'
export interface User{
    id:number,
    name:string,
    token:string
}
interface SearchPanelProps{
    users:User[],
    param:{
        name:string,
        personId:string
    },
    setParam:(param:SearchPanelProps['param']) => void;
}
export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
    // setParam(Object.assign({},param,{name:EventTarget.targer.value}))
    return <form action="">
        {/* <button onClick={logout}></button> */}
        <div>
            <Input type="text" value={param.name} onChange={evt =>setParam({
                ...param,
                name:evt.target.value
            })}/>
            <Select value={param.personId} onChange={value =>setParam({
                ...param,
                personId:value
            })
            }>
            <Select.Option value="">负责人</Select.Option>
            {
                users.map(user => {
                    return   <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>
                })
            }
            </Select>
        </div>
    </form>
}