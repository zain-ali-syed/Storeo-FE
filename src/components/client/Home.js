import React, { Component } from 'react'
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import CategoryCard from '../client/cards/cat-card';
import { getCategories } from '../../helpers/api';


const maxItems = 4;

export default class Home extends Component {

    async componentDidMount() {
        const categories = await getCategories() //resolved promise
        this.setState((prevState) => ({ categories: categories.data }))
    }
    
    displayCategories = () => {
      return this.state.categories.map((category, index) => {
          if(index < maxItems ) return <div className="col s12 m12 l3 "><CategoryCard key={category.id} {...category}/></div>
      })
    }

    render() {
    return (
        <Layout>
            <CategoryContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
        </Layout>

        );
        };
    }


