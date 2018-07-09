import * as React from 'react';
import './Display.css';
import Product from "../Product/Product";
import {IProduct} from "../../Store/Store";

class Display extends React.Component<any, any> {


    buildProducts = () => {
        console.log(this.props.inventory);
        return this.props.inventory.map((product: IProduct) => (
           <Product key={product.code} code={product.code} name={product.name} price={product.price}/>
        ));
    };

    public render() {
        return (
            <div className="display">
                <div className="products">
                    {this.buildProducts()}
                </div>
            </div>
        )
    }
}

export default Display;