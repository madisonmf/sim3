import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this);
    }

    // handleUsernameChange(value){
    //     this.setState({
    //         username: value
    //     })
    // }

    // handlePasswordChange(value){
    //     this.setState({
    //         password: value
    //     })
    // }

    register(){
        const { username, password } = this.state;
        const { history } = this.props;
        axios.post('/auth/callback', this.state).then(results => {
            this.setState({
                username,
                password
            })
            history.push('/dashboard');
        })
    }

    render() {
        return (
            <div>
                Auth
                    <br/>
                    Username:<input className="text-field" onChange={ event => this.setState({ username: event.target.value })}/>
                    <br/>
                    Password:<input className="text-field" onChange={ event => this.setState({ password: event.target.value })}/>
                    <br/>
                    <span>
                        <button className="btn">Login</button>
                        <button className="btn" onClick={ () => { this.register } }>Register</button>
                    </span>
            </div>
        );
    }
}