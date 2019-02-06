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
            console.log("component did mount")
            const orders = await getOrders();
            console.log("orders ", orders.data)
            this.setState((currState) => ({ orders: [...currState.orders, ...orders.data] }));
        } catch (e) {
            console.log("i'm sorry error getting back orders ", e)
        }
    }
    render() {
        console.log(this.state.orders)

        return (
            <Layout>
                {this.state.orders.map(order => (<Order {...order} key={order.order_num} />))}
                {!this.state.orders.length && "You have no previous orders at present"}
            </Layout>
        );
    }
}

export default Orders;