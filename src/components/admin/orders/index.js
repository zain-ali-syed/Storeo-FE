import React from 'react';
import Layout from '../Layout';



const Orders = () => {
    return (
        <Layout>
            <table class="striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item Namse</th>
                        <th>Item Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                </tbody>
            </table>
        </Layout>

    );
};

export default Orders;