import { UserAuth } from 'context/auth-context'
import React, { FormEvent } from 'react'
import {Form,Input,Button } from 'antd'
// const apiUrl = process.env.REACT_APP_API_URL
export const RegisterScree = () => {
    const {register} = UserAuth()
    const handleSubmit = (values:{username:string,password:string}) => {
        register(values)      
    }
    // const login = (params:{username:string,password:string})=>{
    //     fetch(`${apiUrl}/register`,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(params)
    //     }).then(async response => {
    //         if(response.ok){
                
    //         }
    //     })
    // }
    
     return <Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
        <Input placeholder = {'用户名'} type='text' id={'username'}></Input>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required:true,message:'请输入密码'}]}>
        <Input placeholder = {'密码'} type='password' id={'password'}></Input>
    </Form.Item>
    <Form.Item>
        <Button  type={'primary'} htmlType="submit">注册</Button>
    </Form.Item> 
    </Form>
}