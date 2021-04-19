export const isFalsy = (value) =>{return value === 0 ? false: !value}
//在一个函数里，改变闯入的对象是不好的
export const cleanObject = (object) =>{
      const result = {...object}
      Object.keys(result).forEach(key=>{
          const value = result[key]
          if(isFalsy(value)){
              delete result[key]
          }
      })
      return result
}