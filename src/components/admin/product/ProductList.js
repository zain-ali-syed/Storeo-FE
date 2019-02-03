import React, { Component } from 'react';
import { getProducts, deleteProduct } from '../../../helpers/api';
import { Link } from 'react-router-dom';


class ProductList extends Component {

    state = {
        products: []
    }

    deleteProductID = async (id) => {

        try {
            await deleteProduct(id);

            //now update state to reflect this deleted product
            const products = this.state.products.slice().filter(product => product.id !== id);
            this.setState(() => ({ products }))
        } catch (e) {
            console.error("error deleting product ", e)
        }
    }

    async componentDidMount() {
        try {
            const products = await getProducts();
            this.setState((prevState) => ({ products: [...prevState.products, ...products.data] }));
        } catch (e) {
            console.error("Error retrieving product list ", e)
        }
    }

    displayProducts = () => {
        return this.state.products.map(product => {
            return <tr key={product.id}>
                <td><h6>{product.name}</h6></td>
                <td >{product.description}</td>
                <td><img src={product.images[0]} alt={product.name} height="40px"></img></td>
                <td style={{ width: "10%" }}><Link to={`/admin/products/edit/${product.id}`}><button className="btn-floating btn-small"><i className="material-icons center-align">edit</i></button></Link></td>
                <td style={{ width: "10%" }}> <button className="btn-floating btn-small"><i className="material-icons center-align" onClick={() => this.deleteProductID(product.id)}>delete</i></button></td>
            </tr>
        })
    }

    render() {
        console.log(this.state)
        return (
            <table className="striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {this.displayProducts()}
                </tbody>
            </table>
        );
    }
}

export default ProductList;