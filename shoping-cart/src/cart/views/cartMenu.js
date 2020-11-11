import React, { Component } from 'react';
import { connect } from 'react-redux';
import cartActionCreators from '../actions';

import { bindActionCreators } from 'redux';



class CartMenu extends Component {
    componentDidMount() {
        this.props.load();
    }
  
    render() {
        const { cart } = this.props;
        return (
           <span> Cart [{cart.totalProductCount}]</span>
        )
    }
}

function mapStateToProps(storeState){
    const   cart = storeState.cart
    return {cart:cart}
}
function mapDispatchToProps(dispatch) {
    const cartActionDispatchers = bindActionCreators(cartActionCreators, dispatch);
    return {load:cartActionDispatchers.load}
}



export default connect(mapStateToProps,mapDispatchToProps)(CartMenu);