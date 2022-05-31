import React from "react";

const ProductCard = () => {
  return (
    <div>
        <div className="product">
      <img src="images/test.png" className="poster" alt="alt image" />
      <div className="product-details">
        <div className="product-box">
          <h4 className="title">Product Name</h4>
        </div>
        <div className="description">
          <h2>Details</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
