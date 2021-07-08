import React, { ReactNode, useReducer, useState } from "react";
interface obj {
    user:User,
    dispatch:any,
    overallNum:number
}
// const stateObj:obj = {
//     name:"",
//     id:0
// }

export interface User{
    id:number,
    name:string
}
export const Newcontext = React.createContext<obj | undefined>(undefined)

const reducer = (state:any,action:any) => {
    switch(action.type){
        case 'add':
        return state+1
        break;
        case 'down':
            return state-1
        break;
        default:
            return 99999
    }
}
export const DemoContext = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<User>({id:10086,name:'yang'})
    // const [num,setnum] = useState<number>(123)
    const [overallNum, dispatch] = useReducer(reducer, 0)
    return <Newcontext.Provider value={{user,overallNum,dispatch}} children={children}></Newcontext.Provider>
}
export const AppProviders = ({children}:{children:ReactNode}) => {
    return <DemoContext children={children}></DemoContext>
}