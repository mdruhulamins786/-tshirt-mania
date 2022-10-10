import React from "react";

const Cart = ({ cart }) => {
  // const { name, price } = cart;

  let total = 0;
  for (let products of cart) {
    total = total + products.price;
  }

  return (
    <div>
      <h3>Item Quantity {cart.length}</h3>

      <p>Prices: {total}</p>
    </div>
  );
};

export default Cart;
