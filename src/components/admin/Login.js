import React, { Component } from 'react';
import Layout from './Layout';
import { loginUser } from '../../helpers/api';
import { connect } from 'react-redux';

import './styles.css'


class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        try {
            const res = await loginUser(this.state);
            console.log("responsse ", res.data)
        } catch (e) {
            console.error("Error while logging in user", e)
        }
    }

    render() {
        console.log("state ", this.state, this.props.user)
        return (
            <Layout>
                <div className="form-style-5">
                    <fieldset>
                        <legend><span className="number"></span>Login</legend>
                        <input name="email" type="text" placeholder="Email" className="validate" value={this.state.email} onChange={this.handleChange} />
                        <input name="password" type="text" placeholder="Password" className="validate" value={this.state.password} onChange={this.handleChange} />
                    </fieldset>
                    <input type="submit" value="Register" onClick={this.onSubmit} />

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

export default connect(mapStateToProps)(Login);
