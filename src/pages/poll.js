import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Question, Result} from './index';

let PollComp = ({author, question, user_id, isAnswered, history}) => {
    !question && history.push('/404');
    return(
        question ? (isAnswered ? <Result author={author} question={question} user_id={user_id} /> : <Question author={author} question={question} user_id={user_id}/>) : null
    )   
}

const mapStateToProps = (state, {match}) => ({
    isAnswered: state.users[state.user_id].answers[match.params.id],
    question: state.questions[match.params.id],
    author: state.questions[match.params.id] && state.users[state.questions[match.params.id].author],
    user_id: state.user_id
})

export const Poll = withRouter(connect(mapStateToProps)(PollComp))