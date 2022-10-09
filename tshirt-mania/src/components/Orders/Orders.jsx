import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirts/TShirts";

const Orders = () => {
  const tshirts = useLoaderData();
  // console.log(tshirts);
  const [cart, setCart] = useState([]);

  const handleAddCart = (id) => {
    const newCart = [...cart, id];

    setCart(newCart);
  };

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
