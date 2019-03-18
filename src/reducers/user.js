export const users = (state = {}, action) => {
    switch(action.type){
        case 'LOAD_USERS':
            return { ...action.users }
        default:
            return state;
    }
}

export const getUsers = users => {
    let arr = []
    Object.keys(users).forEach(key => arr.push(users[key]))
    return arr;
}