import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from '../../../helpers/api'



class CategoryList extends Component {

    state = {
        categories: []
    }

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
            return <tr key={category.id}>
                <td className="large_td"><h6>{category.name}</h6></td>
                <td><Link to={`/admin/category/add_edit/${category.id}`}>
                    <button className="btn-floating btn-small"><i className="material-icons center-align">edit</i></button></Link></td>
                <td><button className="btn-floating btn-small"><i className="material-icons center-align" onClick={() => this.deleteCategoryID(category.id)}>delete</i></button></td>
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