import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-gradient-to-br from-red-950 to-black text-white shadow-xl">
      <figure>
        <img src={photo} alt="Coffee Img" className="w-1/2" />
      </figure>
      <div className="flex gap-3">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
        </div>
        <div className="btn-group btn-group-vertical gap-5  p-3">
          <button className="btn btn-outline border-0 border-x-2 btn-sm hover:bg-red-950 text-white">
            View
          </button>
          <button className="btn btn-outline border-0 border-x-2 btn-sm hover:bg-red-950 text-white">
            Edit
          </button>
          <button className="btn btn-outline border-0 border-x-2 btn-sm hover:bg-red-950 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
