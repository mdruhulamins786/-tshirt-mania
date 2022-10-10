import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utility";
import Cart from "../Cart/Cart";
import TShirt from "../TShirts/TShirts";

const Orders = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);

  const handleAddCart = (tshirt) => {
    const newCart = [...cart, tshirt];
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[tshirt._id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[tshirt._id] = newQuantity;
    } else {
      shoppingCart[tshirt._id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

    setCart(newCart);
  };

  useEffect(() => {
    const storedCart = getStoredCart();

    console.log(storedCart);

    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = tshirts.find((product) => product._id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [tshirts]);

  return (
    <div className="d-grid">
      <div className="row">
        <div className="col-9">
          {/* <div className="row"> */}
          <div className="t-shirt">
            {tshirts.map((tshirt, index) => (
              <TShirt
                key={index}
                tshirt={tshirt}
                handleAddCart={handleAddCart}
              />
            ))}
          </div>
          {/* </div> */}
        </div>

        <div className="col-3">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
