import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../assets/add-coffee-banner.jpg";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
             toast.success("Coffee added successfully!");
        }
      })
      .catch(error=>{
        toast.error("Failed to add coffee. Please try again.");
      })
  };
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
        <h1 className="text-6xl text-white text-center font-bold font-serif pt-10">
          Add your coffee
        </h1>
        {/* <h1 className="text-5xl text-white uppercase font-bold text-center font-serif bg-transparent p-10 w-1/2 mx-auto">
            add your coffee
            </h1> */}
      </div>
      {/* form */}
      <div className="relative p-28" style={{ zIndex: 1 }}>
        <form onSubmit={handleAddCoffee}>
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
                <span className="label-text text-white">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
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
                <span className="label-text text-white">Details</span>
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
                <span className="label-text text-white">Photo URL</span>
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

          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block btn-outline mt-5 text-white"
          />
        </form>
      </div>
       <ToastContainer
                position="bottom-right"
                autoClose={3000} // Auto-close the toast after 3 seconds
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </div>
  );
};

export default AddCoffee;
