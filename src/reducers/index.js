export const auth = (state = null, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.id;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}

export * from './user'
export * from './question'