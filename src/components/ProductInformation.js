import React, { Component } from "react";
import ProductDisplay from "./ProductDisplay";
export default class ProductInformation extends Component {
  render() {
    const {
      title,
      media,
      average_rating_percentage,
      description,
      body,
      preservatives_free
    } = this.props.product;
    return (
      <div className="product-information">
        <button
          onClick={e => this.props.displayAllProducts()}
          className="button"
        >
          X
        </button>
        <img
          src={media["hero_image"]}
          alt={`${title} being used`}
          className="hero-image"
        />
        <h2>
          {title}: {description}
        </h2>
        <p>{body}</p>
      </div>
    );
  }
}
