const NumList = (state = [],action) => {
    switch (action.type){
        case 'Init':
            return [...action.list]
        break;
        case 'ADD':
            return [
                ...state,
                action.value
            ]
        break;
        case 'DOWN':
            state.splice(action.index,1)
            return [
                ...state
            ]
            break;
        case 'SINGULAR':
         
         let tempApp= state.map(item => {
                if(item%2 !==0){
                return item
                }
            })
            return [...tempApp]
        case 'EVENNUMBERS':
            let tempApps = state.map(item => {
                if(item%2 ==0){
                return item
                }
            })
        return  [...tempApps]
        default:
            return state
    }
        
}
export default NumList