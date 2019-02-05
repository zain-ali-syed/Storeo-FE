import React, { Component } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import '../styles.css'
import validator from 'validator';
import M from 'materialize-css';
import { getProducts, getCategories, editProduct } from '../../../helpers/api';
import { registerPlugin } from 'react-filepond';
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
        category_name: "",
        name: "",
        description: "",
        price: "",
        discount: 0,
        category_id: "",
        category_properties: [],
        property_units: [],
        images: [],
        imageURLS: [],
        tags: "",
        errorMessages: [],
        formData: ""
    }

    async componentDidMount() {
        M.AutoInit();
        const product = await getProducts(this.props.match.params.id);
        const category = await getCategories(product.data[0].category_id);

        this.setState({
            ...this.state, ...product.data[0], tags: product.data[0].tags.join(","),
            property_units: category.data[0].property_units,
            category_name: category.data[0].name

        }, () => this.setProductProperties())
    }



    onSubmit = async (e) => {
        e.preventDefault();

        if (this.formValid()) {

            const { name, description, price, discount, category_id, category_properties, images, tags } = this.state;
            const postObject = { name, description, price, discount, tags: tags.split(","), images, category_id, product_properties: category_properties };

            //now update product database with this new product
            try {
                console.log("Edit product --> ", JSON.stringify(postObject))
                await editProduct(postObject, this.props.match.params.id);
                //now redirect to products page
                this.props.history.push("/admin/products");
            } catch (e) {
                console.log("Error while updating product to database ", e)
            }

        }
    }


    formValid = () => {

        const errorMessages = [];

        if (validator.isEmpty(this.state.name)) errorMessages.push("Please enter a product name");
        if (validator.isEmpty(this.state.description)) errorMessages.push("Please enter a description");
        if (validator.isEmpty(this.state.price.toString())) errorMessages.push("Please enter a price");
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



    displayCategoryProperties = () => {
        return this.state.category_properties.map((category_property, i) => {
            let placeholder_txt = category_property.property_name;
            if (category_property.units) placeholder_txt += "/" + category_property.units
            return (<div key={i}>
                <input name={category_property.property_name}
                    value={category_property.property_value}
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
        this.setState({ [e.target.name]: e.target.value });
    }

    setProductProperties = () => {
        const product_properties = this.state.property_names;
        const product_properties_values = this.state.property_values;
        const product_units = this.state.property_units;

        const category_id = this.state.category_id;

        const length = product_properties.length;

        let tmpArray = [];

        for (var i = 0; i < length; i++) {
            tmpArray.push({ "category_id": category_id, "property_name": product_properties[i], "units": product_units[i], "property_value": product_properties_values[i] })
        }

        this.setState({ category_properties: tmpArray }, () => { this.product_properties = this.state.category_properties });


    }

    render() {
        console.log("state ", this.state)
        return (
            <Layout>
                <h1>Edit Product</h1>

                <br></br>
                <div className="theForm">

                    <fieldset>
                        <legend><span className="number">1</span>Category: {this.state.category_name}</legend>

                    </fieldset>

                    <fieldset>
                        <legend><span className="number">2</span>Product information</legend>

                        <input name="name" type="text" placeholder="Product name" className="validate" onChange={this.handleChange} value={this.state.name} />
                        <textarea style={{ height: "100px" }} name="description" type="text" placeholder="Enter description" className="validate" onChange={this.handleChange} value={this.state.description} />
                        <input name="price" type="text" placeholder="Enter Price" className="validate" onChange={this.handleChange} value={this.state.price} />
                        <input name="discount" type="text" placeholder="Enter Discount" className="validate" onChange={this.handleChange} value={this.state.discount} />
                        <input name="tags" type="text" placeholder="Enter Tags" className="validate" onChange={this.handleChange} value={this.state.tags} />
                    </fieldset>
                    <fieldset>
                        <legend><span className="number">3</span>Images</legend>
                        {this.state.images.map(image_url => {
                            return <img src={image_url} alt="" width="200px" style={{ margin: "10px" }} key={image_url} />
                        })}
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
                    <input type="submit" value="Save changes" onClick={this.onSubmit} />
                </div>
            </Layout >
        );
    }
}

export default ProductAddEdit;
