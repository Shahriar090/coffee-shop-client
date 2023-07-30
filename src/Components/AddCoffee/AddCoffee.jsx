import React from "react";
import bgImage from "../../assets/add-coffee-banner.jpg";

const AddCoffee = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      ></div>

      <div>
        <h1 className="text-5xl text-white uppercase font-bold text-center font-serif bg-transparent p-10 w-1/2 mx-auto">
          add your coffee
        </h1>
      </div>
      {/* form */}
      <div className="p-28">
        <form>
            {/* form row */}
          <div className="flex gap-4">
            {/* name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* quantity */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">
                  Available Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
            {/* form row */}
          <div className="flex gap-4">
            {/* supplier */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Supplier"
                  name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* taste */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">
                  Taste
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Taste"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
            {/* form row */}
          <div className="flex gap-4">
            {/* Category */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Details */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">
                  Details
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="photo">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
         
            <input type="submit" value="Add Coffee" className="btn btn-block btn-outline text-white mt-5 " />
         
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
