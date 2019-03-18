export const login = id => ({
    type: 'LOGIN',
    id
})

export const logout = () => ({
    type: 'LOGOUT',
})

export * from './question';
export * from './user';
