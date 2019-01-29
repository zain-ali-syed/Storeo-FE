import React, { Component } from 'react';


class CategoryList extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        this.setState((prevState) => ({ categories: [{ id: 1, name: "Electronics" }, { id: 2, name: "Books" }, { id: 3, name: "Clothes" }] }))
    }

    getCategories = () => {
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
                {this.getCategories()}
            </table>
        );
    }
}

export default CategoryList;