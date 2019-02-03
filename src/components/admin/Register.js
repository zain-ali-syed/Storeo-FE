import React, { Component } from 'react';
import Layout from './Layout';
import { registerAdmin } from '../../helpers/api';

import './styles.css'


class Register extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        try {
            const res = await registerAdmin(this.state);
            console.log("response ", res)
        } catch (e) {
            console.error("Error while registering new user ", e)
        }
    }

    render() {
        console.log("state ", this.state)
        return (
            <Layout>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number"></span>Registration</legend>
                        <input name="firstname" type="text" placeholder="First name" className="validate" value={this.state.firstname} onChange={this.handleChange} />
                        <input name="lastname" type="text" placeholder="Last name" className="validate" value={this.state.lastname} onChange={this.handleChange} />
                        <input name="email" type="text" placeholder="Email" className="validate" value={this.state.email} onChange={this.handleChange} />
                        <input name="password" type="text" placeholder="Password" className="validate" value={this.state.password} onChange={this.handleChange} />
                    </fieldset>
                    <input type="submit" value="Register" onClick={this.onSubmit} />

                </div>
            </Layout>
        );
    }
}

export default Register;