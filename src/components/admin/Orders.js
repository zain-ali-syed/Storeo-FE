import React from 'react';


const Orders = () => {
    return (
        <table class="striped grey darken-1">
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

    );
};

export default Orders;