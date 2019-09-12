import React, { Component } from "react";
import ProductDisplay from "../components/ProductDisplay";

export default class ProductContainer extends Component {
  render() {
    return (
      //create a fixed grid to store product components in
      //then pass one product to each product display component
      <div className="product-container">
        {this.props.products.map(product => (
          <ProductDisplay
            key={product.id}
            product={product}
            displayProductInformation={this.props.displayProductInformation}
          />
        ))}
      </div>
    );
  }
}
