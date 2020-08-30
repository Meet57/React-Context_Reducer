export const SirnameReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE':
            return state = action.name
        case 'RESET':
            return state='Patel'
        case 'APPEND':
            return state += action.name
        default:
            return state
    }
}