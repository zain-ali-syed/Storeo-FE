import React, { Component } from 'react';
import { getProducts } from '../../../helpers/api'


class ProductList extends Component {

    state = {
        products: []
    }

    async componentDidMount() {
        const products = await getProducts();
        this.setState((prevState) => ({ products: [...prevState.products, ...products.data] }));
    }

    displayProducts = () => {
        return this.state.products.map(product => {
            return <tr key={product}>
                <td className="large_td">{product.name}</td>
                <td><i class="material-icons center-align">edit</i></td>
                <td><i class="material-icons center-align">delete</i></td>
            </tr>
        })
    }

    render() {
        return (
            <table className="mediumTable">
                {this.displayProducts()}
            </table>
        );
    }
}

export default ProductList;