import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';



import ProductsList from './views/ProductsList';
import productActionCreators from './actions';
import cartActionCreators from '../cart/actions';



class Products extends Component {
    componentDidMount(){
        this.props.load();
    }
    render() {
        const { data, cart,addToCart } = this.props;
        return (
            <div>
                <h3>Products</h3>
             
                <ProductsList
                   cart={cart}
                    products={data}
                    addToCart={addToCart}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products,
        cart = storeState.cart
    return { data : products, cart};
}

function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    const categoryActionDispatchers = bindActionCreators(cartActionCreators, dispatch);
   const {addToCart}=categoryActionDispatchers
    return {...productActionDispatchers,addToCart} ;
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);