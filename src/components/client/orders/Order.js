import React from 'react';
import OrderItem from './OrderItem';

const Order = ({ order_num, order_status, products, products_id, quantities, special_instructions, created_at }) => {

    console.log("Products ", products)
    return (
        <React.Fragment>
            <table id="customers">
                <tr>
                    <th>Order Number: {order_num} Date: {created_at}</th>
                </tr>
                {
                    products.map((product, i) => (<OrderItem product={product} product_id={products_id[i]} quantity={quantities[i]} />))
                }

            </table>
            <br /><br />
        </React.Fragment>
    );
};

export default Order;