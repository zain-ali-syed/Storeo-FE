import React from 'react';
import OrderItem from './OrderItem';
import moment from 'moment';
import '../styles.css'


const Order = ({ order_num, order_status, products, products_id, quantities, special_instructions, created_at }) => {

    return (
        <React.Fragment>
            <table className="striped">
                <thead style={{ backgroundColor: "#e0e0e0" }}>
                    <tr>
                        <td style={{ color: "#3E005D" }}><h7><b>Order Number: </b>{order_num} | <b>Date:</b> {moment(created_at).format('MMMM Do YYYY')}</h7></td>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map((product, i) => (<OrderItem product={product} product_id={products_id[i]} quantity={quantities[i]} />))
                    }
                </tbody>
            </table>
            <br /><br />
        </React.Fragment>
    );
};

export default Order;