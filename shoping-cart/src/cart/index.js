import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from './actions';
import './index.css';
import CartItem from './views/cartItem'

class Cart extends Component {
    componentDidMount() {
        this.props.load();
    }

    render() {
        const { data, products, removeFromCart, addToCart } = this.props;
        const totalprice = () => {
            let price = 0;
            data.cartDetails.forEach(element => {
                const product = products.find(prod => element.productId === prod.id)
                if (!product.isOutOfStock) {
                    price += (product.price * element.productCount)
                }
            });
            return price;
        }


        return (
            <div>
                <h3>Cart Details</h3>
                <hr />
                { (data.cartDetails.length == 0) ?
                    <span>Your Cart is empty </span>
                    : <section>
                        <section>
                            <ol>
                                {
                                    data.cartDetails.map((cartProduct, index) => (
                                        <CartItem key={index}
                                            cart={data}
                                            removeFromCart={removeFromCart}
                                            addToCart={addToCart}
                                            cartProduct={cartProduct} products={products} />))
                                }
                            </ol>
                        </section>
                        <section >
                            <div ><span className='price cart'>Total items: {data.totalProductCount}</span>
                            </div>
                            <div> <span className='price cart'>Total price : Rs. {totalprice()}</span></div>
                            <div>
                                <br />
                                <input className='price placeOrder' disabled='true' type='button' value='Place Order'></input>


                            </div>

                        </section>


                    </section>}
            </div>
        )
    }
}

function mapStateToProps(storeState) {
    const products = storeState.products,
        cart = storeState.cart
    return { data: cart, products: products };
}

function mapDispatchToProps(dispatch) {
    const cartActionDispatchers = bindActionCreators(cartActionCreators, dispatch);
    return cartActionDispatchers
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
