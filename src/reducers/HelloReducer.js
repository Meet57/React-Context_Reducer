export const HelloReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE':
            return state = action.name
        case 'RESET':
            return state='Meet'
        case 'APPEND':
            return state += action.name
        default:
            return state
    }
}