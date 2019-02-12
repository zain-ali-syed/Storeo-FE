import React, { Component } from 'react';
import Layout from './Layout';
import { loginUser } from '../../helpers/api';
import { connect } from 'react-redux';

import './styles.css'


class Login extends Component {

    state = {
        email: "",
        password: "",
        errorMessage: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        try {
            const { email, password } = this.state;
            const user = await loginUser({ email, password });
            this.props.storeAuthentication(user.data);
            this.props.history.push("/admin");
        } catch (e) {
            this.setState({ errorMessage: " I'm sorry there has been an error logging in. Please check your credentials" })
        }
    }

    render() {
        console.log("state ", this.state, this.props.user)
        return (
            <Layout>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number"></span>Login</legend>
                        <input name="email" type="text" placeholder="Email" className="validate" value={this.state.email} onChange={this.handleChange} />
                        <input name="password" type="text" placeholder="Password" className="validate" value={this.state.password} onChange={this.handleChange} />
                    </fieldset>
                    <input type="submit" value="Login" onClick={this.onSubmit} />
                    <div className="error">{this.state.errorMessage}</div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeAuthentication: (user) => { dispatch({ type: "USER_LOGGED_IN", data: user }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
