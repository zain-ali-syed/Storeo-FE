import React, { Component } from 'react';
import Layout from './LayoutPage';
import { addAddress } from '../../helpers/api';
import { connect } from 'react-redux';
import validator from 'validator';



import './styles.css'


class Register extends Component {

    state = {
        country: "",
        address: "",
        zip: "",
        phone: "",
        errorMessages: []
    }

    componentDidMount() {
        const { address, zip, country, phone } = this.props.user;
        this.setState({ address, zip, country, phone })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValid = () => {

        const errorMessages = [];
        if (validator.isEmpty(this.state.country)) errorMessages.push("Please enter a country");
        if (validator.isEmpty(this.state.address)) errorMessages.push("Please enter an address");
        if (validator.isEmpty(this.state.zip)) errorMessages.push("Please enter a zip");
        if (validator.isEmpty(this.state.phone)) errorMessages.push("Please enter a phone number")

        if (!errorMessages.length) return true;

        this.setState({ ...this.state, errorMessages });
        return false;
    }

    onSubmit = async (e) => {
        try {
            if (!this.formValid()) return;
            await addAddress(this.state);
            const { address, country, zip, phone } = this.state;

            this.props.addAddress({ address, country, zip, phone })
            this.props.history.push("/myprofile");
        } catch (e) {
            console.error("Error while add address for  user ", e)
        }
    }

    render() {

        return (
            <Layout>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number">1</span>{this.props.address ? "Add Address" : "Edit Address"}</legend>
                        <input name="address" type="text" placeholder="Address" className="validate" value={this.state.address} onChange={this.handleChange} />
                        <input name="zip" type="text" placeholder="zip" className="validate" value={this.state.zip} onChange={this.handleChange} />
                        <input name="phone" type="text" placeholder="phone" className="validate" value={this.state.phone} onChange={this.handleChange} />
                        <input name="country" type="text" placeholder="Country" className="validate" value={this.state.country} onChange={this.handleChange} />

                    </fieldset>
                    {
                        this.state.errorMessages.length > 0 &&
                        <fieldset>
                            <legend><span class="number">2</span>Please correct the following</legend>
                            <div className="errorMessage">
                                {this.state.errorMessages.map(error => <p key={error} className="errorMessage">{error}</p>)}
                            </div>
                        </fieldset>
                    }
                    <input type="submit" value={this.props.address ? "Add Address" : "Edit Address"} onClick={this.onSubmit} />

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
        addAddress: (user) => {
            dispatch({ type: "USER_ADDRESS_ADDED", data: user })
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);

