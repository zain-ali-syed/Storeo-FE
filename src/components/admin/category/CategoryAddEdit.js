import Layout from '../Layout';
import M from 'materialize-css';


import React, { Component } from 'react';

class CategoryAddEdit extends Component {

    state = {
        category: "",
        properties: []
    }

    async componentDidMount() {
        M.AutoInit();


        //check if we are editing a category or adding a category
        if (this.props.match.params.id) {
            const id = this.props.match.params.id;
            console.log("We are editing category ", id)
        }
    }

    addProperty = () => {
        this.setState((prevState) => ({ properties: [...this.state.properties, { name: "", units: "" }] }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("send to database: ", JSON.stringify(this.state));
    }

    handleChange = (e) => {

        if (e.target.name === "category") {
            this.setState({ category: e.target.value })
            return;
        }

        const arr = this.state.properties.slice();
        arr[e.target.id][e.target.name] = e.target.value;
        this.setState(() => ({ properties: arr }))
    }

    render() {
        return (
            <Layout>
                <div>
                    <input name="category" type="text" placeholder="Category name" className="validate" onChange={this.handleChange} />
                    <button className="waves-effect waves-light btn-small black" onClick={this.addProperty}>Add Category Property</button>
                    {this.state.properties.map((property, i) => (
                        <div className="row" key={i}>

                            <div className="input-field col s4">
                                <input name="name" type="text" className="validate" placeholder="Name" onChange={this.handleChange} id={i}
                                    value={this.state.properties[i]["name"]}
                                />
                            </div>

                            <div className="input-field col s3">
                                <input name="units" type="text" className="validate" placeholder="Units" onChange={this.handleChange} id={i}
                                    value={this.state.properties[i]["units"]}
                                />
                            </div>
                            <div className="input-field col s1">
                                <i class="material-icons" style={{ paddingTop: "25px" }}>delete</i>
                            </div>

                        </div>
                    ))}
                </div>
                <br></br>
                <button className="waves-effect waves-light btn-small right" onClick={this.onSubmit}>Add Category</button>
            </Layout>

        );
    }
}

export default CategoryAddEdit;
