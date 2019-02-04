import React, { Component } from 'react';
import CategoryList from './CategoryList.js';
import { Link } from 'react-router-dom';
import Layout from '../Layout';


class Category extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <Link to="/admin/category/add_edit">
                        <span>
                            <i className="medium material-icons blue-grey-text text-darken-3">add_circle</i>
                            <span className="action_header">Add new category</span><br /><br />
                        </span>
                    </Link>
                    <CategoryList />
                </div>
            </Layout>
        );
    }
}



export default Category;