import React, { Component } from 'react';
import Layout from './Layout';
import { loginUser } from '../../helpers/api';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { userLoggedIn } from '../../actions/example.actions';


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
            console.log("sending login details ", { email, password })
            const user = await loginUser({ email, password });
            this.props.storeAuthentication(user.data);
            this.props.history.push("/");
        } catch (e) {
            this.setState({ errorMessage: " I'm sorry there has been an error logging in. Please check your credentials" })
        }
    }

    render() {

        if (this.props.user.id) return <Redirect to="/" ></Redirect>
        return (
            <Layout>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number"></span>Login</legend>
                        <input name="email" type="text" placeholder="Email" className="validate" value={this.state.email} onChange={this.handleChange} />
                        <input name="password" type="text" placeholder="Password" className="validate" value={this.state.password} onChange={this.handleChange} />
                    </fieldset>
                    <input type="submit" value="Login" onClick={this.onSubmit} />
                    <p style={{ color: "black" }}>Not registered? <Link to="/register">Please click here to register</Link></p>
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
        storeAuthentication: (user) => { dispatch(userLoggedIn(user)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
