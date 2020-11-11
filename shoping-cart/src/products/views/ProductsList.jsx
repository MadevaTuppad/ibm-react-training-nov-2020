import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
    render() {
        const { products, cart,addToCart } = this.props;
        const productItems = products.map(product => (
            <ProductItem
                key={product.id}
                product={product}
                cart={cart}
                addToCart={addToCart}
            />
        )
        );
        return (
            <section className="list">
                <ol>
                    {productItems}
                </ol>
              
            </section>
        )
    }
}

export default ProductsList;