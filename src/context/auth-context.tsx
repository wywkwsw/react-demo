import React, { ReactNode, useState } from 'react'
import * as auth from "auth-provider"
import { User } from 'screens/project-list/search-panel'
import { http } from 'utils/http'
import { useMount } from 'utils'

interface AuthFrom {
    username: string,
    password: string
}
const AuthContext = React.createContext<{
    user: User | null,
    login: (from: AuthFrom) => Promise<void>,
    register: (from: AuthFrom) => Promise<void>
    logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext' //设置在chrome中查看的别名

const bootstrapUser = async() => {
    let user = null
    const token = auth.getToken()
    if(token){
        const data = await http('me',{token})
        user = data.user
    }
    return user
}
export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (from: AuthFrom) => {
      return  auth.login(from).then(user => {
            setUser(user)
        })
    }
    const register = (from: AuthFrom) => {
        return auth.register(from).then(user => {
            setUser(user)
        })
    }
    const logout = () => {
        return  auth.logout().then(user => {
            setUser(null)
        })
    }
    useMount(() => {
        bootstrapUser().then(setUser)
    })

    return <AuthContext.Provider value={{ user, login, register, logout }} children={children}></AuthContext.Provider>
}

export const UserAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('userAuth必须在AuthProvider中使用')
    }
    return context
}