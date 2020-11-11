import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        const { cartProduct, products, removeFromCart, addToCart, cart } = this.props;
        const product = products.find(prod => prod.id === cartProduct.productId);
        const { id, name, price, isOutOfStock } = product;

        return (
            <li>
                <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>{name}</span>
                <br />
                {isOutOfStock ? <span></span> : <div className="price">Rs.{cartProduct.productCount * price}</div>}
                <span className={isOutOfStock ? 'outofstock' : 'inStock'}>
                    {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                </span>
                <br />
                <br />
                {isOutOfStock ? <span></span> :
                    <span> <input type="button" value="-" onClick={() => removeFromCart(id, cart, false)} />[ {cartProduct.productCount} ]<input type="button" value="+" onClick={() => addToCart(id, cart)} />
                    </span>}
                <br />
                <input type="button" className="removeItmeFromCart" value="Remove" style={{ float: 'right' }} onClick={() => removeFromCart(id, cart, true)} />
                <br />
            </li>
        );
    }

}
export default CartItem