import Layout from '../Layout';
import M from 'materialize-css';
import '../styles.css';
import validator from 'validator';
import { postCategory, editCategory, getCategories } from '../../../helpers/api';
import { FilePond, registerPlugin } from 'react-filepond';
import { cloudinaryConstants } from '../../../constants/cloudinary.constants';
import axios from 'axios';


import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';


import React, { Component } from 'react';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

class CategoryAddEdit extends Component {

    state = {
        name: "",
        description: "",
        image: [],
        imageURLs: [],
        category_properties: [],
        editMode: false,
        errorMessages: []
    }

    async componentDidMount() {
        M.AutoInit();

        //check if we are editing a category or adding a category
        if (this.props.match.params.id) {

            const category = await getCategories(this.props.match.params.id);
            const { name, description, image, property_names, property_units } = category.data[0];
            const category_properties = [];

            for (var i = 0; i < property_names.length; i++) {
                category_properties.push({ property_name: property_names[i], units: property_units[i] })
            }

            this.setState(() => ({ ...this.state, editMode: true, name, description, image, category_properties }))
        }
    }

    addProperty = () => {
        this.setState(() => ({ category_properties: [...this.state.category_properties, { property_name: "", units: "" }] }))
    }

    formValid = () => {

        const errorMessages = [];

        if (validator.isEmpty(this.state.name)) errorMessages.push("Please enter a product name");
        if (validator.isEmpty(this.state.description)) errorMessages.push("Please enter a description");
        if (!this.state.image.length) errorMessages.push("Please upload a category image")

        if (!errorMessages.length) return true;

        this.setState({ ...this.state, errorMessages });
        return false;
    }

    uploadImage = () => {
        var formData = new FormData();
        formData.append('file', this.state.image[0]);
        formData.append('upload_preset', cloudinaryConstants.CLODUINARY_UPLOAD_PRESET);
        return axios.post(cloudinaryConstants.CLOUDINARY_URL, formData);
    }


    onSubmit = async (e) => {
        e.preventDefault();

        if (!this.formValid()) return;

        if (!this.state.editMode) {
            try {
                const imageData = await this.uploadImage();
                this.setState({ image: imageData.data.secure_url });
                const { name, description, image, category_properties } = this.state;

                console.log("posting object ", JSON.stringify({ name, description, image, category_properties }))
                await postCategory({ name, description, image, category_properties });
                // now redirect to categories page
                this.props.history.push("/admin/categories");
            } catch (e) {
                console.log("Error adding new category to database ", e)
            }
            return;
        }

        try {
            const { name, description, image, category_properties } = this.state;
            console.log("edited category object");
            console.log(JSON.stringify({ name, description, image, category_properties }));

            await editCategory({ name, description, image, category_properties }, this.props.match.params.id);
            this.props.history.push("/admin/categories");
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

        if (e.target.name === "name" || e.target.name === "description") {
            this.setState({ [e.target.name]: e.target.value })
            return;
        }


        const arr = this.state.category_properties.slice();
        arr[e.target.id][e.target.name] = e.target.value;

        this.setState(() => ({ category_properties: arr }))
    }

    render() {
        console.log("state ", this.state)
        return (
            <Layout>
                <h1>{this.state.editMode ? "Edit category" : "Add new Category"}</h1>

                <br></br>
                <div className="theForm">
                    <fieldset>
                        <legend><span className="number">1</span>Category Name</legend>
                    </fieldset>
                    <input name="name" type="text" placeholder="Category name" onChange={this.handleChange} value={this.state.name} />
                    <fieldset>
                        <legend><span className="number">2</span>Description</legend>
                    </fieldset>
                    <textarea style={{ height: "100px" }} name="description" type="text" placeholder="Category description" onChange={this.handleChange} value={this.state.description} />

                    {!this.state.editMode &&
                        <fieldset>
                            <legend><span className="number">3</span>Add a category image</legend>

                            <FilePond ref={ref => this.pond = ref}
                                files={this.state.image}
                                acceptedFileTypes={['image/*']}
                                fileValidateTypeDetectType={(source, type) => new Promise((resolve, reject) => {
                                    if (source.type !== "image/png" && source.type !== "image/jpeg") reject(type);
                                    else this.setState({ image: [source] });
                                    resolve(type);
                                })}
                            >
                            </FilePond>
                        </fieldset>
                    }
                    {
                        this.state.editMode &&
                        <fieldset>
                            <legend><span className="number">3</span>Category image</legend>
                            <img src={this.state.image} alt="" width="200px" style={{ margin: "10px" }} />
                        </fieldset>
                    }
                    <fieldset>
                        <legend><span className="number">4</span>Add Category Properties</legend>
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

                    {
                        this.state.errorMessages.length > 0 &&
                        <fieldset>
                            <legend><span class="number">5</span>Please correct the following</legend>
                            <div className="errorMessage">
                                {this.state.errorMessages.map(error => <p key={error} className="errorMessage">{error}</p>)}
                            </div>
                        </fieldset>
                    }

                    <input type="submit" onClick={this.onSubmit} value={this.state.editMode ? "Edit category" : "Add Category"} />

                </div>
            </Layout>

        );
    }
}

export default CategoryAddEdit;



