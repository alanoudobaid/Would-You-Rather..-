import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { QTemplate } from '../components'

class QuestionComp extends Component {
    state={}

    onChange = e => this.setState({ value: e.target.value })

    onSubmit = () => {
        const { value } = this.state;
        const { user_id, question, dispatch } = this.props;

        value && dispatch(actions.sendAnswer({authedUser: user_id, qid: question.id, answer: value}));
    }

    render(){
        const { author, question } = this.props;

        return(<QTemplate avatar={author.avatarURL} name={author.name}>
                <h2 style={{marginBottom: 10}} >Would You Rather ...</h2>
                <div>
                    <input name="option" type="radio" id="option-1" value="optionOne" onChange={this.onChange }/>
                    <label htmlFor="option-1">{question.optionOne.text}</label>
                </div>
                <div>
                    <input name="option" type="radio" id="option-2" value="optionTwo" onChange={this.onChange} />
                    <label htmlFor="option-2">{question.optionTwo.text}</label>
                </div>
                <button onClick={this.onSubmit} >
                    Submit
                </button>
            </QTemplate>)
    }

}

export const Question = connect()(QuestionComp)