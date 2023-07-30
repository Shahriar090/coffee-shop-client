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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 02 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImageTwo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 03 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImageThree} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
