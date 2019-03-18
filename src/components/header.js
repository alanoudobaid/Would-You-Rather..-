import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import * as actions from '../actions'
import './styles.css'

let HeaderComp = ({ history, dispatch, name, avatar }) => {

    const logout = () => {
        history.push('/')
        dispatch(actions.logout())
    }

    return(
        <header id="header">
            <div>
                <div className="nav-link-container">
                    <NavLink exact to="/home" className="nav-link">Home</NavLink>
                    <NavLink exact to="/add" className="nav-link">New Question</NavLink>
                    <NavLink exact to="/leaderboard" className="nav-link">Leader Board</NavLink>
                </div>
                {name && avatar ? <div className="profile">
                    <span>Hello, {name}</span>
                    <img src={avatar} alt={name} />
                    {/* eslint-disable-next-line */}
                    <a id="logout" onClick={logout} className="nav-link">Logout</a>
                </div> : null}
            </div>
        </header>)
}

const mapStateToProps = state => ({
    name: state.user_id ? state.users[state.user_id].name : null,
    avatar: state.user_id ? state.users[state.user_id].avatarURL : null
})

export const Header = withRouter(connect(mapStateToProps)(HeaderComp))
