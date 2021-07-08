const Addlist = (value,index) =>({
    type:'ADD',
    value,
    index
})
const Downlist = (index) => ({
    type:'DOWN',
    index
})
const InitList = (value) => ({
    type:'Init',
    list:value
})
const FIlTER_SIGUR = () => ({
    type:'SINGULAR'
})
const FILTER_EVENNUMBERS = () =>({
    type:'EVENNUMBERS'
})
export {
    Addlist,
    Downlist,
    InitList,
    FIlTER_SIGUR,
    FILTER_EVENNUMBERS
}