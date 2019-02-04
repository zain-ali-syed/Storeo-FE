import React, { Component } from 'react'
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import { connect } from 'react-redux';
import { getCategories } from '../../helpers/api'
import { getCateg } from '../../actions/example.actions';

const maxItems = 4;

class Home extends Component {

async componentDidMount() {
    const categories = await getCategories()
    this.props.getCateg(categories.data);
}

displayProductByCat = () => {
    return this.props.categories.map((category, index) => {
        if(index < maxItems ) return <div className="" key={category.id}><p className="black-text">{category.name} {category.id}</p><ProductContainer {...category}/></div>
    })
  }

render() {
    return (
        <Layout>
            <CategoryContainer />
            {this.displayProductByCat()}
        </Layout>
        );
    };
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    })
    
const mapDispatchToProps = (dispatch) => ({
    getCateg: (data) => dispatch(getCateg(data)),
    })
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Home);