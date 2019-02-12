import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ product, product_id, quantity }) => {
    return (
        <tr >
            <td style={{ border: "1px solid #eeeeee", padding: "10px" }}>
                <span className="blue-grey-text text-darken-2" style={{ fontWeight: "500" }}>{product}</span>
                <p>Quantity ordered: {quantity}</p>
                <Link to={`/productcard/${product_id}`}>View Product Details</Link>
            </td>
        </tr>
    );
};

export default OrderItem;