import React from 'react'
import {User} from './search-panel'
import {Table} from 'antd'
interface ListInter{
    key?: number
    id:number,
    name:string,
    personId:number,
    organization:string,
    created:number
}
interface ListProps{
    users:User[],
    list:ListInter[]
}
// import {useEffect,useState} from 'react'
export const List = ({users,list}:ListProps)=>{
    // const newlist = JSON.parse(JSON.stringify(list)).map((item,index) => {
    //     item.key = index
    //     return {
    //         ...item
    //     }
    // })
    return <Table pagination={false} columns={[{
        title:'名称',
        dataIndex:'name',
        sorter:(a,b) => a.name.localeCompare(b.name)
    },{
        title:'负责人',
        render(value,project){
            return <span>
                {users.find(user => user.id === project.personId)?.name || '未知'}
            </span>
        }
    }]} dataSource={list}>
    </Table>
}