import React from 'react'
import { NavLink } from 'react-router-dom';
import { QTemplate } from './question_template'

export const QHome = ({avatar, answer, name, id}) => (
    <QTemplate avatar={avatar} name={name}>
        <h4>Would you rather</h4>
        <p>...{answer.substring(0, 15)}...</p>
        <NavLink exact to={`/question/${id}`} className="nav-link view-poll-link">View Poll</NavLink>
    </QTemplate>
)