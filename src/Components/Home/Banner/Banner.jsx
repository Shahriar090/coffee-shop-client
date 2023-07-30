import React from "react";
import bannerImageOne from "../../../assets/slider-image-1.jpg";
import bannerImageTwo from "../../../assets/slider-image-2.jpg";
import bannerImageThree from "../../../assets/slider-image-3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {/* slide 01 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImageOne} className="w-full" />
          <div className="absolute flex flex-col  top-48 left-1/2 bg-gradient-to-r p-16 rounded-full from-black to-transparent">
            <h1 className="text-6xl text-white font-bold font-serif border-b-2 m-2">
              Coffee Heaven
            </h1>

            <p className="text-white m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores dolorum pariatur reprehenderit dignissimos. Tempore,
              dolorum?
            </p>
            <div>
              <button className="btn btn-outline text-white hover:bg-red-950 m-2">
                Shop Here
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-outline text-white hover:bg-red-950 ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-outline text-white hover:bg-red-950">
              ❯
            </a>
          </div>
        </div>
        {/* slide 02 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImageTwo} className="w-full" />
          <div className="absolute flex flex-col  top-36 left-1/2 bg-gradient-to-r p-16 rounded-full from-black to-transparent">
            <h1 className="text-6xl text-white font-bold font-serif border-b-2 m-2">
              Coffee Factory
            </h1>

            <p className="text-white m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores dolorum pariatur reprehenderit dignissimos. Tempore,
              dolorum?
            </p>
            <div>
              <button className="btn btn-outline text-white hover:bg-red-950 m-2">
                Shop Here
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-outline text-white hover:bg-red-950">
              ❮
            </a>
            <a href="#slide3" className="btn btn-outline text-white hover:bg-red-950">
              ❯
            </a>
          </div>
        </div>
        {/* slide 03 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImageThree} className="w-full" />
          <div className="absolute flex flex-col  top-20 left-14 bg-gradient-to-r p-16 rounded-full from-black to-transparent">
            <h1 className="text-6xl text-white font-bold font-serif border-b-2 m-2">
              Coffee Masters
            </h1>

            <p className="text-white m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores dolorum pariatur reprehenderit dignissimos. Tempore,
              dolorum?
            </p>
            <div>
              <button className="btn btn-outline text-white hover:bg-red-950 m-2">
                Shop Here
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-outline text-white hover:bg-red-950">
              ❮
            </a>
            <a href="#slide1" className="btn btn-outline text-white hover:bg-red-950">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
