import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from '../../../helpers/api';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



class CategoryList extends Component {

    state = {
        categories: []
    }

    confirmDelete = (category_name, category_id) => {
        confirmAlert({
            message: `Are you sure you want to delete the category ${category_name}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteCategoryID(category_id)
                },
                {
                    label: 'No',
                    onClick: () => console.log("no")
                }
            ]
        })
    };


    deleteCategoryID = async (id) => {

        try {
            await deleteCategory(id);

            //now update state to reflect this delete category
            const categories = this.state.categories.slice().filter(category => category.id !== id);
            this.setState(() => ({ categories }))
        } catch (e) {
            console.error("error deleting category ", e)
        }
    }

    async componentDidMount() {
        try {
            var categories = await getCategories();
            this.setState((prevState) => ({ categories: categories.data }))
        } catch (e) {
            console.error("There was an error retrieving categories ", e)
        }
    }

    displayCategories = () => {
        return this.state.categories.map(category => {
            return <tr key={category.id} style={{ border: "1px solid #eeeeee", padding: "20px" }}>
                <td ><img src={category.image} alt={category.name} height="80px"></img></td>
                <td><h6 className="blue-grey-text text-darken-2" style={{ fontWeight: "500" }}>{category.name}</h6></td>
                <td style={{ padding: "15px" }}>{category.description}</td>

                <td style={{ width: "50px" }}><Link to={`/admin/category/add_edit/${category.id}`}>
                    <button className="btn-floating btn-small"><i className="material-icons center-align">edit</i></button></Link></td>
                <td style={{ width: "50px" }}><button className="btn-floating btn-small"><i className="material-icons center-align" onClick={() => this.confirmDelete(category.name, category.id)}>delete</i></button></td>
            </tr>
        })
    }

    render() {
        return (
            <table className="striped">
                <tbody>
                    {this.displayCategories()}
                </tbody>
            </table>
        );
    }
}

export default CategoryList;