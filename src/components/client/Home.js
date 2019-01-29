import React from 'react';
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';


const Home = () => {
    return (
        <Layout>
            <CategoryContainer />
            <ProductContainer />
        </Layout>

    );
};

export default Home;