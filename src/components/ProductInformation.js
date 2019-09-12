import React, { Component } from "react";
import ProductDisplay from "./ProductDisplay";
export default class ProductInformation extends Component {
  render() {
    return (
      <div>
        <p>{this.props.product.title}</p>
        <button onClick={e => this.props.displayAllProducts()}>Back</button>
      </div>
    );
  }
}
