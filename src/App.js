import React, { Component } from "react";
import "./App.css";
import ProductContainer from "./containers/ProductContainer";
import ProductInformation from "./components/ProductInformation";

const URL = `https://cors-anywhere.herokuapp.com/uk.lush.com/mobile/v2.0/product_display`;

export default class App extends Component {
  //store products in the lowest level of the app possible
  constructor() {
    super();
    this.state = { products: [], displayProduct: false };
  }

  toRender = () => {
    if (this.state.displayProduct === false) {
      return (
        <ProductContainer
          products={this.state.products}
          displayProductInformation={this.displayProductInformation}
        />
      );
    } else {
      return (
        <ProductInformation
          product={this.state.displayProduct}
          displayAllProducts={this.displayAllProducts}
        />
      );
    }
  };

  displayProductInformation = product => {
    this.setState({ displayProduct: product });
  };

  displayAllProducts = () => {
    this.setState({ displayProduct: false });
  };

  //once app has been rendered on the page, fetch the images from the API and attach to the app
  async componentDidMount() {
    const response = await fetch(`${URL}`);
    const json = await response.json();
    this.setState({ products: json });
  }
  //pass products down to product container
  render() {
    return <div>{this.toRender()}</div>;
  }
}
