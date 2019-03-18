import React, { Component } from 'react';
import Select from 'react-select'
import { connect } from 'react-redux'
import { getUsers } from '../reducers'
import * as actions from '../actions'
import './styles.css'

class SigninComp extends Component {

    componentDidMount(){
        const { users, dispatch } = this.props;
        !users.length && dispatch(actions.fetchUsers());
    }

    setOptions = () => {
        const { users } = this.props;
        let options = []
        users.forEach(user => options.push({value: user.id, label: user.name}));
        return options
    }

    onChange = ({ value }) => this.setState({ value })

    logIn = async () => this.state.value && 
        this.props.dispatch(actions.login(this.state.value));


    render() {
        return (
            <div className="signin">
                <header>
                    <h4>Welcome to the Would You Rather App!</h4>
                    <h5>Press sign in to continue</h5>
                </header>
                <div className="signin-content">
                    <img alt="redux-react-logo" src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.3/1551449028703/Microsoft.VisualStudio.Services.Icons.Default" />
                    <h2 className="title">Sign In</h2>
                    <Select options={this.setOptions()} onChange={this.onChange}/>
                    <button onClick={this.logIn}>Sign In</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: getUsers(state.users)
})

export const Signin = connect(mapStateToProps)(SigninComp)