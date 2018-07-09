import * as React from 'react';
import './Product.css';

const Product = (props: any) => {
    // const image ="https://cdn.shopify.com/s/files/1/0972/7116/products/kit-kat-xl-4.25oz-candy-bar8.png?v=1478023267";
    return (
        <div className="product">
            <div className="product-display">
               <h4>{props.name.toUpperCase()}</h4>
            </div>
            <h5 className="product-code">{props.code} ({props.price})</h5>
        </div>
    )
};

export default Product;