import React from "react";

const Cart = ({ cart }) => {
  // const { name, price } = cart;

  let prices = 0;

  for (let products of cart) {
    prices = prices + products.price
  }

  return (
    <div>
      <h3>Item Quantity {cart.length}</h3>
      <p>Prices: {prices}</p>
    </div>
  );
};

export default Cart;
