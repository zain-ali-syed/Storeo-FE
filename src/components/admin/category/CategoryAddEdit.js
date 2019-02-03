import Layout from '../Layout';
import M from 'materialize-css';
import '../styles.css'
import { postCategory, editCategory, getCategories } from '../../../helpers/api';


import React, { Component } from 'react';

class CategoryAddEdit extends Component {

    state = {
        name: "",
        category_properties: [],
        editMode: false
    }

    async componentDidMount() {
        M.AutoInit();

        //check if we are editing a category or adding a category
        if (this.props.match.params.id) {

            const category = await getCategories(this.props.match.params.id);
            const { name, property_names, property_units } = category.data[0];
            const category_properties = [];

            for (var i = 0; i < property_names.length; i++) {
                category_properties.push({ property_name: property_names[i], units: property_units[i] })
            }

            this.setState(() => ({ ...this.state, editMode: true, name, category_properties }))
        }
    }

    addProperty = () => {
        this.setState(() => ({ category_properties: [...this.state.category_properties, { property_name: "", units: "" }] }))
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if (!this.state.editMode) {
            try {
                await postCategory(this.state);
                //now redirect to categories page
                this.props.history.push("/admin/categories");
            } catch (e) {
                console.log("Error adding new category to database ", e)
            }
            return;
        }

        try {
            console.log("update category ", this.state)
            await editCategory(this.state);
        } catch (e) {
            console.log("Error updating  category", e)
        }
    }

    handleDeleteProperty = (e) => {

        const arr = this.state.category_properties.slice();
        const id = e.target.id;
        arr.splice(id, 1)

        this.setState(() => ({ category_properties: arr }))
    }

    handleChange = (e) => {

        if (e.target.name === "name") {
            this.setState({ name: e.target.value })
            return;
        }

        const arr = this.state.category_properties.slice();
        arr[e.target.id][e.target.name] = e.target.value;

        this.setState(() => ({ category_properties: arr }))
    }

    render() {
        return (
            <Layout>
                <h1>{this.state.editMode ? "Edit category" : "Add new Category"}</h1>

                <br></br>
                <div className="form-style-5">
                    <fieldset>
                        <legend><span className="number">1</span>Category Name</legend>
                    </fieldset>
                    <input name="name" type="text" placeholder="Category name" onChange={this.handleChange} value={this.state.name} />
                    <fieldset>
                        <legend><span className="number">2</span>Add Category Properties</legend>
                    </fieldset>
                    <input type="button" onClick={this.addProperty} value="Add Category Property" />
                    {this.state.category_properties.map((property, i) => (
                        <div className="row" key={i}>

                            <div className="col s12 m6" style={{ height: "20px" }}>
                                <input name="property_name" type="text" placeholder="Property" onChange={this.handleChange} id={i}
                                    value={this.state.category_properties[i]["property_name"]}
                                />
                            </div>

                            <div className="col s12 m4">
                                <input name="units" type="text" placeholder="Units" onChange={this.handleChange} id={i}
                                    value={this.state.category_properties[i]["units"]}
                                />
                            </div>

                            <div className="col s12 m2">
                                <button className="btn-floating btn-small red darken-4" >
                                    <i className="material-icons" onClick={this.handleDeleteProperty} id={i}>delete</i>
                                </button>
                            </div>

                        </div>
                    ))}
                    <input type="submit" onClick={this.onSubmit} value={this.state.editMode ? "Edit category" : "Add Category"} />

                </div>
            </Layout>

        );
    }
}

export default CategoryAddEdit;



