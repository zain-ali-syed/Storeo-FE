import React, { Component } from 'react';
import CategoryList from './CategoryList.js';

class Category extends Component {
    render() {
        return (
            <div>
                <span>
                    <i className="medium material-icons blue-grey-text text-darken-3">add_circle</i>
                    <span className="action_header">Add new category</span>
                </span>
                <CategoryList />
            </div>
        );
    }
}



export default Category;