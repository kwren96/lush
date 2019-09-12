import React, { Component } from "react";
const images = {
  Vegan: require("../vegan.png"),
  Vegetarian: require("../vegetarian.png")
};

export default class ProductDisplay extends Component {
  render() {
    const {
      title,
      media,
      average_rating_percentage,
      certification,
      preservatives_free
    } = this.props.product;

    return (
      <div
        className="product-display"
        onClick={e => this.props.displayProductInformation(this.props.product)}
      >
        <img
          className="commerce-image"
          src={media["commerce_image"]}
          alt="product"
        />
        <h3>{title}</h3>
        <img
          src={images[certification.split(" ")[0]]}
          className="certification"
          alt={`Certified ${certification}`}
        />
      </div>
    );
  }
}
