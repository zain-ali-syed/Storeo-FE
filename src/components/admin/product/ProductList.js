import React, { Component } from 'react';
import { getProducts, deleteProduct } from '../../../helpers/api';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class ProductList extends Component {

    state = {
        products: [],
    }

    confirmDelete = (product_name, product_id) => {
        confirmAlert({
            message: `Are you sure you want to delete the product ${product_name}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteProductID(product_id)
                },
                {
                    label: 'No',
                    onClick: () => console.log("no")
                }
            ]
        })
    };


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
                <td><h6 className="blue-grey-text text-darken-2 product-category-names" style={{ fontWeight: "200" }}>{product.name}</h6></td>
                <td style={{ padding: "15px" }}>{product.description}</td>
                <td style={{ width: "50px" }}><Link to={`/admin/products/edit/${product.id}`}><button className="btn-floating btn-small"><i className="material-icons center-align">edit</i></button></Link></td>
                <td style={{ width: "50px" }}> <button className="btn-floating btn-small"><i className="material-icons center-align" onClick={() => this.confirmDelete(product.name, product.id)}>delete</i></button></td>
            </tr>
        })
    }

    render() {

        const { open } = this.state;

        return (
            <React.Fragment>
                <table className="striped" >
                    <thead>

                    </thead>
                    <tbody>
                        <br />
                        {this.displayProducts()}
                    </tbody>
                </table>

            </React.Fragment>
        );
    }
}

export default ProductList;