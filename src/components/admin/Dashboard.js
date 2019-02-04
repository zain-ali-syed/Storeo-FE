import React from 'react';
import Layout from './Layout';
import CategoryIcon from '../../images/categories.png'
import ProductsIcon from '../../images/products.png'
import OrdersIcon from '../../images/orders.png';


const Dashboard = () => {
    return (
        <Layout>
            <div className="container dashboard">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block center">
                                <img src={CategoryIcon} alt="Manage Categories" width="100px"></img>
                                <h5 className="center">Manage Categories</h5>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block center">
                                <img src={ProductsIcon} alt="Manage Products" width="100px"></img>
                                <h5 className="center">Manage Products</h5>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block center">
                                <img src={OrdersIcon} alt="View Orders" width="100px"></img>
                                <h5 className="center">View Orders</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;