import {useEffect} from 'react'
export const isFalsy = (value:unknown) =>{return value === 0 ? false: !value}
//在一个函数里，改变闯入的对象是不好的
export const cleanObject = (object:{[key:string]:unknown}) =>{
      const result = {...object}
      Object.keys(result).forEach(key=>{
          const value = result[key]
          if(isFalsy(value)){
              delete result[key]
          }
      })
      return result
}

export const useMount = (callback:()=> void) => {
    useEffect(() => {
        callback()
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
}