import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../actions'

class NewQuestionComp extends Component{

    state = {}

    onChangeOptionOneText = e => this.setState({optionOneText: e.target.value})

    onChangeOptionTwoText = e => this.setState({optionTwoText: e.target.value})

    onSubmit = () => {
        const { optionOneText, optionTwoText } = this.state;
        optionOneText && optionTwoText && this.props.dispatch(actions.sendQuestion({optionOneText, optionTwoText, author: this.props.author.id}))
        this.props.history.push('/home');
    }

    render() {
        return(
            <div className="new-question">
                <header>
                    <h1>Create New Question</h1>
                </header>
                <div className="new-question-content">
                    <p>Complete Question:</p>
                    <h3>Would you rather ...</h3>
                    <form>
                        <input className="text" type="text" placeholder="Enter Option One Text Here" onChange={this.onChangeOptionOneText} />
                        <div className="divider">
                            <hr />
                            <span>OR</span>
                        </div>
                        <input className="text" type="text" placeholder="Enter Option One Text Here" onChange={this.onChangeOptionTwoText} />
                        <button type="submit" onClick={this.onSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    author: state.users[state.user_id]
})

export const NewQuestion = withRouter(connect(mapStateToProps)(NewQuestionComp))