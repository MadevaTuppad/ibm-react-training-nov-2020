import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const { product, cart,addToCart } = this.props,
            { id, name, description, price, isOutOfStock,category } = product;
            console.log(category)

        return (
            <li>
                <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>{name}</span>
                <div className="catagory">{category}</div>
                <div>{description}</div>
                <div className="price">Rs.{price}</div>
                
                <label htmlFor="">Out of Stock</label>
                <br />
                <input type="button" value="Add To Cart" onClick={() => addToCart(id,cart)} />
            </li>
        )
    }
}

export default ProductItem;