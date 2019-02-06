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
            return <tr key={product.id} style={{ border: "1px solid #eeeeee", padding: "20px" }}>
                <td ><img src={product.images[0]} alt={product.name} height="80px"></img></td>
                <td><h6 className="blue-grey-text text-darken-2" style={{ fontWeight: "500" }}>{product.name}</h6></td>
                <td style={{ padding: "15px" }}>{product.description}</td>
                <td style={{ width: "50px" }}><Link to={`/admin/products/edit/${product.id}`}><button className="btn-floating btn-small"><i className="material-icons center-align">edit</i></button></Link></td>
                <td style={{ width: "50px" }}> <button className="btn-floating btn-small"><i className="material-icons center-align" onClick={() => this.deleteProductID(product.id)}>delete</i></button></td>
            </tr>
        })
    }

    render() {
        return (
            <table className="striped" >
                <thead>

                </thead>
                <tbody>
                    <br />
                    {this.displayProducts()}
                </tbody>
            </table>
        );
    }
}

export default ProductList;