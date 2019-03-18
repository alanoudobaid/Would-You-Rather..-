import * as api from '../api'

const loadUsers = (users) => ({
    type: 'LOAD_USERS',
    users
})

export const fetchUsers = () => async dispatch => {
    const users = await api._getUsers();
    dispatch(loadUsers(users))
}
