import React from 'react'
// import {useEffect,useState} from 'react'
export const SearchPanel = ({users,param,setParam}) => {

    

    // setParam(Object.assign({},param,{name:EventTarget.targer.value}))
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={evt =>setParam({
                ...param,
                name:evt.target.value
            })}/>
            <select value={param.personId} onChange={evt =>setParam({
                ...param,
                personId:evt.target.value
            })
            }>
            <option value="">负责人</option>
            {
                users.map(user => {
                    return   <option value={user.id} key={user.id}>{user.name}</option>
                })
            }
            </select>
        </div>
    </form>
}