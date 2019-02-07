import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import CategoryContainer from "./containers/category";
import ProductContainer from "./containers/product";
import { connect } from "react-redux";
import { getCategories } from "../../helpers/api";
import { getCateg } from "../../actions/example.actions";
import './Home.css';

const numOfCategoriesToShow = 2;

class Home extends Component {
    async componentDidMount() {
        const categories = await getCategories();
        this.props.getCateg(categories.data);
    }

  displayProductByCat = () => {
    return this.props.categories.map((category, i) => {
    if (i < numOfCategoriesToShow) {
        return (
            <div className="category-product-row" key={category.id}>
                <Link
                    to={{
                        pathname: `/productslist/${category.id}`,
                        state: { categoryName: category.name }
                    }}
                >
                    <h2 className="category-header">
                        {category.name}
                    </h2>
                </Link>
                <ProductContainer {...category} />
            </div>
      );
    }
    else return null;

    });
  };

    render() {
        return (
            <Layout>
                <h2 className="popular-categories">
                    Popular Categories
                </h2>
                <CategoryContainer />
                {this.displayProductByCat()}
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    getCateg: data => dispatch(getCateg(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
