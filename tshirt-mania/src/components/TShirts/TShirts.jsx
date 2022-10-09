import React from "react";

const TShirts = ({ tshirt, handleAddCart }) => {
  const { _id, name, price, picture } = tshirt;
  return (
    <div>
      <div className="card text-center">
        <img
          src={picture}
          style={{ height: "250px" }}
          className="img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5 className="my-3">Price: {price}</h5>
          <button
            onClick={() => handleAddCart(tshirt)}
            className="btn btn-info w-100"
          >
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
};

export default TShirts;
