import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../reducers'
import { theme } from '../constants'
import { QHome } from '../components'
import * as actions from '../actions'

class HomeComp extends Component{
    state = {}

    constructor(props) {
        super(props);
        props.dispatch(actions.fetchQuestions());
        props.dispatch(actions.fetchUsers());
    }
    // 0: unanswered question.
    // 1: answewred question
    setPage = page => this.setState({page})

    render() {
    
        const { users, unanswered, answered } = this.props
        const btn_one_style = !this.state.page ? { ...styles.btn,borderRight: '2px solid #eee', ...styles.active_btn} : { ...styles.btn, borderRight: '2px solid #eee' };
        const btn_two_style = this.state.page ? { ...styles.btn, ...styles.active_btn} : { ...styles.btn };
    
        return(
        <div style={{ borderRadius: 5, overflow: 'hidden', border: '2px solid #eee'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button style={btn_one_style} onClick={() => this.setPage(0)}>Unanswered Questions</button>
                <button style={btn_two_style} onClick={() => this.setPage(1)}>Answered Questions</button>
            </div>
            <div style={{ padding: 12}} className="questions_container">
            {!this.state.page ? <div>
                {unanswered.map(q => <QHome key={q.id} avatar={users[q.author].avatarURL} name={users[q.author].name} answer={q.optionOne.text} id={q.id} />)}
            </div> : <div>
                {answered.map(q => <QHome key={q.id} avatar={users[q.author].avatarURL} name={users[q.author].name} answer={q.optionOne.text} id={q.id} />)}
            </div>}
                
            </div>
        </div>
    )}
}

const styles = {
    btn: {
        backgroundColor: '#FFF',
        borderRadius: 0,
        color: '#000',
        padding: '13px 0',
        margin: 0,
        border: 'none',
        borderBottom: '2px solid #eee'
    },
    active_btn: {
        color: theme.primary_color,
        backgroundColor: '#f5f5f5'
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    answered: getQuestions(state.questions).filter(q => state.users[state.user_id].answers[q.id]),
    unanswered: getQuestions(state.questions).filter(q => !state.users[state.user_id].answers[q.id])
})

export const Home = connect(mapStateToProps)(HomeComp);