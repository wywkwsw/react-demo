import qs from "qs"
import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import {useEffect,useState} from 'react'
import {cleanObject} from "../../utils"
import { userHttp } from "utils/http"
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const[param,setParam] = useState({
        name:"",
        personId:""
    })
    const [list, setList] = useState([])
    const [users,setUsers] = useState([])
    const client = userHttp()
    useEffect(() => {
        client('users',{}).then(setUsers)
        // fetch(`${apiUrl}/users`).then(async response => {
        //     if(response.ok){
        //         setUsers(await response.json())
        //     }
        // })
    }, [])
    useEffect(() => {
        client('projects',{data:cleanObject(param)}).then(setList)
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
        //     if(response.ok){
        //         setList(await response.json())
        //     }
        // })
    }, [param])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}