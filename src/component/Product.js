import React, { useState } from "react";

function Product(props) {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-container">
      <h2 className="color">Brand Product</h2>
      <img className="product-image" src={props.pic} alt={props.sname || "Product"} />
      <h3>{props.sname}: {count}</h3>
      <div className="button-group">
        <button className="btn minus" onClick={minus}>-</button>
        <button className="btn plus" onClick={add}>+</button>
      </div>
    </div>
  );
}

export default Product;
