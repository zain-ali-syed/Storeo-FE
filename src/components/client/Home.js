import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Layout from './Layout';
import CategoryContainer from './containers/category';
import ProductContainer from './containers/product';
import { connect } from 'react-redux';
import { getCategories } from '../../helpers/api'
import { getCateg } from '../../actions/example.actions';

const maxItems = 6;

class Home extends Component {

    async componentDidMount() {
        const categories = await getCategories()
        this.props.getCateg(categories.data);
    }

    displayProductByCat = () => {
        return this.props.categories.map((category, index) => {
            return (
                <div className="" key={category.id}>

                    <Link
                        to={{ pathname: `/productslist/${category.id}`, state: { categoryName: category.name } }}
                        className="waves-effect waves-light btn">
                        <i className="material-icons left">open_in_new</i>
                        {category.name}
                    </Link>
                    <ProductContainer {...category} />
                </div>
            )

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