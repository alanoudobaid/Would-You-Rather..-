import React from 'react'
import { QTemplate, Progress } from '../components'

export const Result = ({ author, question, user_id}) => {

    const opt_one_votes = question.optionOne.votes.length
    const opt_two_votes = question.optionTwo.votes.length;

    const total_votes = opt_one_votes + opt_two_votes;

    return(
        <QTemplate avatar={author.avatarURL} name={author.name}>
            <h1>Results:</h1>
            <div className={`result-card ${question.optionOne.votes.find(id => id === user_id) ? 'mine' : ''}`}>
                <span className="tag">Your Vote</span>
                <h4>Would You Rather {question.optionOne.text}</h4>
                <Progress progress={(opt_one_votes / total_votes) * 100} />
                <h5>{opt_one_votes} out of {total_votes} votes</h5>
            </div>
            <div className={`result-card ${question.optionTwo.votes.find(id => id === user_id) ? 'mine' : ''}`}>
                <span className="tag">Your Vote</span>
                <h4>Would You Rather {question.optionTwo.text}</h4>
                <Progress progress={(opt_two_votes / total_votes) * 100}/>
                <h5>{opt_two_votes} out of {total_votes} votes</h5>
            </div>
        </QTemplate>
    )
}
