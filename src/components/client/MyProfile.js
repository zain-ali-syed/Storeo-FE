import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css'


const MyProfile = (props) => {
    var { first_name, last_name, address, zip, country, phone, email } = props.user;
    return (
        <Layout>
            <div className="theForm">
                <fieldset>
                    <legend><span className="number">1</span>Personal Details</legend>
                    <p>{first_name + " " + last_name}</p>
                    <p>{email}</p>
                </fieldset>

                {
                    address &&
                    <fieldset>
                        <legend><span className="number">2</span>Registered Address<Link to="/address"> (edit address)</Link></legend>
                        <p>{address}</p>
                        <p>{zip}</p>
                        <p>{country}</p>
                        <p>{phone}</p>
                    </fieldset>
                }

                {
                    !address &&
                    <fieldset>
                        <legend><span className="number">2</span>Please  <Link to="/address">click here</Link> to add an address to your account</legend>
                    </fieldset>
                }

                <fieldset>
                    <legend><span className="number">3</span>Previous Orders</legend>
                    <p>Please <Link to="/orders">click here</Link> to view previous orders</p>
                </fieldset>

            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MyProfile);