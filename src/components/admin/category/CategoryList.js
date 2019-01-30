import React, { Component } from 'react';
import { getCategories } from '../../../helpers/api'



class CategoryList extends Component {

    state = {
        categories: []
    }

    async componentDidMount() {
        const categories = await getCategories() //resolved promise
        this.setState((prevState) => ({ categories: categories.data }))
    }

    displayCategories = () => {
        return this.state.categories.map(category => {
            return <tr key={category}>
                <td className="large_td">{category.name}</td>
                <td><i class="material-icons center-align">edit</i></td>
                <td><i class="material-icons center-align">delete</i></td>
            </tr>
        })
    }

    render() {
        return (
            <table className="mediumTable">
                {this.displayCategories()}
            </table>
        );
    }
}

export default CategoryList;