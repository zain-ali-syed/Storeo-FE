import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ product, product_id, quantity }) => {
    return (
        <tr>
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{product}</span>
                            <p>Quantity ordered: {quantity}</p>
                        </div>
                        <div class="card-action">
                            <Link to={`/productcard/${product_id}`}>View Product Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </tr>
    );
};

export default OrderItem;