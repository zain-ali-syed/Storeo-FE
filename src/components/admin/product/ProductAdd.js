import React, { Component } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../styles.css'
import validator from 'validator';
import { getCategories, postProduct } from '../../../helpers/api';
import { FilePond, registerPlugin } from 'react-filepond';
import { cloudinaryConstants } from '../../../constants/cloudinary.constants'

import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);


class ProductAddEdit extends Component {

    promises = [];
    product_properties = [];

    state = {
        name: "",
        description: "",
        price: "",
        discount: 0,
        category_id: "",
        category_properties: [],
        images: [],
        imageURLS: [],
        tags: "",
        categories: [],
        errorMessages: [],
        formData: ""
    }

    async componentDidMount() {
        try {
            var categories = await getCategories();
            this.setState((prevState) => ({ categories: categories.data }))
        } catch (e) {
            console.error("There was an error retrieving the categories ", e)
        }
    }


    onSubmit = async (e) => {
        e.preventDefault();

        if (this.formValid()) {

            //form data is valid so now upload product images
            try {
                const imageData = await this.uploadImages();
                const tmp = imageData.map(imageData => (imageData.data.secure_url));
                this.setState((prevState) => ({ imageURLS: tmp }));
                const { name, description, price, discount, category_id, category_properties, imageURLS, tags } = this.state;
                var postObject = { name, description, price, discount, tags: tags.split(","), images: imageURLS, category_id, product_properties: category_properties };
            } catch (e) {
                console.error("Error while uploading product images ", e)
            }

            //now add this new product to database 
            try {
                await postProduct(postObject);
                //now redirect to products page
                this.props.history.push("/admin/products");
            } catch (e) {
                console.error("Error while adding product to database ", e)
            }
        }
    }


    formValid = () => {

        const errorMessages = [];

        if (validator.isEmpty(this.state.name)) errorMessages.push("Please enter a product name");
        if (validator.isEmpty(this.state.description)) errorMessages.push("Please enter a description");
        if (validator.isEmpty(this.state.price)) errorMessages.push("Please enter a price");
        if (!this.state.images.length) errorMessages.push("Please choose at least one image")
        if (validator.isEmpty(this.state.tags)) errorMessages.push("Please enter some tags")

        if (!errorMessages.length) return true;

        this.setState({ ...this.state, errorMessages });
        return false;
    }


    uploadImages = () => {

        this.state.images.forEach((image) => {

            var formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', cloudinaryConstants.CLODUINARY_UPLOAD_PRESET);

            this.promises.push(axios.post(cloudinaryConstants.CLOUDINARY_URL, formData));

        })

        return axios.all(this.promises);
    }

    displayCategories = () => {
        return this.state.categories.map(category => {
            return <option key={category.id} value={category.id} data-properties={category.property_names} data-units={category.property_units}>{category.name}</option>
        })
    }

    displayCategoryProperties = () => {
        return this.state.category_properties.map((category_property, i) => {
            let placeholder_txt = category_property.property_name;
            if (category_property.units) placeholder_txt += "/" + category_property.units
            return (<div key={i}>
                <input name={category_property.property_name}
                    type="text"
                    placeholder={`${placeholder_txt}`}
                    onChange={this.handlePropertyChange}
                    className="validate"
                />
            </div>);
        })
    }


    handlePropertyChange = (e) => {

        this.product_properties.forEach(property => {
            if (property.property_name === e.target.name) property.property_value = e.target.value
        })

        this.setState({ category_properties: this.product_properties });
    }

    handleChange = (e) => {
        if (e.target.name === "category_id") {
            const product_properties = e.target.options[e.target.selectedIndex].dataset.properties.split(",");
            const product_units = e.target.options[e.target.selectedIndex].dataset.units.split(",");
            const category_id = e.target.options[e.target.selectedIndex].value;

            const length = product_properties.length;

            let tmpArray = [];

            for (var i = 0; i < length; i++) {
                tmpArray.push({ "category_id": category_id, "property_name": product_properties[i], "units": product_units[i], "property_value": "" })
            }

            this.setState({ category_properties: tmpArray }, () => { this.product_properties = this.state.category_properties });
        }

        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log("state ", this.state)
        return (
            <Layout>
                <h1>Add new product</h1>

                <br></br>
                <div className="theForm">

                    <fieldset>
                        <legend><span className="number">1</span>Choose your product category</legend>
                        <select className="browser-default" name="category_id" onChange={this.handleChange}>
                            <option value="">Choose your category</option>
                            {this.displayCategories()}
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend><span className="number">2</span>Product information</legend>

                        <input name="name" type="text" placeholder="Product name" className="validate" onChange={this.handleChange} value={this.state.name} />
                        <input name="description" type="text" placeholder="Enter description" className="validate" onChange={this.handleChange} value={this.state.description} />
                        <input name="price" type="text" placeholder="Enter Price" className="validate" onChange={this.handleChange} value={this.state.price} />
                        <input name="discount" type="text" placeholder="Enter Discount" className="validate" onChange={this.handleChange} value={this.state.discount} />
                        <input name="tags" type="text" placeholder="Enter Tags" className="validate" onChange={this.handleChange} value={this.state.tags} />
                    </fieldset>

                    <fieldset>
                        <legend><span className="number">3</span>Add product images</legend>

                        <FilePond ref={ref => this.pond = ref}
                            files={this.state.images}
                            allowMultiple={true}
                            acceptedFileTypes={['image/*']}
                            maxFiles={3}
                            fileValidateTypeDetectType={(source, type) => new Promise((resolve, reject) => {
                                console.log("source type ", source.type)
                                if (source.type !== "image/png" && source.type !== "image/jpeg") reject(type);
                                else this.setState({ images: [...this.state.images, source] });
                                resolve(type);
                            })}
                        >
                        </FilePond>
                    </fieldset>

                    {
                        this.state.category_properties.length > 0 &&
                        <fieldset>
                            <legend><span className="number">4</span>Additional product info</legend>
                            <div>
                                {this.displayCategoryProperties()}
                            </div>
                        </fieldset>
                    }

                    {
                        this.state.errorMessages.length > 0 &&
                        <fieldset>
                            <legend><span class="number">5</span>Please correct the following</legend>
                            <div className="errorMessage">
                                {this.state.errorMessages.map(error => <p key={error} className="errorMessage">{error}</p>)}
                            </div>
                        </fieldset>
                    }

                    {this.state.formData}
                    <input type="submit" value="Add Product" onClick={this.onSubmit} />
                </div>
            </Layout >
        );
    }
}

export default ProductAddEdit;
