import React, { Component } from 'react';
import Layout from '../Layout';
import { getOrders } from '../../../helpers/api';
import Order from './Order';
import '../styles.css'

class Orders extends Component {

    state = {
        orders: []
    }

    async componentDidMount() {
        try {
            this.setState({ orders: (await getOrders()).data })
        } catch (e) {
            console.log("i'm sorry error getting back orders ", e)
        }
    }
    render() {
        console.log(this.state.orders)
        { if (this.state.orders.length === 0) return (<div>Loading</div>) }

        return (
            <Layout>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number"></span>Previous Orders</legend>
                    </fieldset>
                    {this.state.orders.map(order => (<Order {...order} key={order.order_num} />))}
                </div>
            </Layout>
        );
    }
}

export default Orders;