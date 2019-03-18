import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../reducers'
import * as actions from '../actions'
import { Card } from '../components'

class LeadershipComp extends Component{

    constructor(props){
        super(props);
        props.dispatch(actions.fetchUsers());
    }

    render() {
        const { users } = this.props;
        return(
            <div>
                {users ? users.map(user => <Card key={user.id} user={user} />) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users ? getUsers(state.users).slice(0, 3).sort((a,b) => 
            (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + b.questions.length)
        ) : null,
})

export const Leadership = connect(mapStateToProps)(LeadershipComp)