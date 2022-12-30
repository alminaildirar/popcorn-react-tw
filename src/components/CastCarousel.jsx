import React from "react";
import CastCarouselImage from "./CastCarouselImage";

function CastCarousel({ data }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative flex items-center ">
        <button
          className=" w-8 h-8 rounded-full text-white opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        >
          <i class="fas fa-chevron-left mr-2 text-2xl"></i>
        </button>
        <div
          id="slider"
          className="w-full h-full overflow-y-hidden overflow-x-auto overscroll-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <a className="group relative inline-block text-center" href="#">
              <CastCarouselImage url={item.profile_path} />
              <div className="absolute top-[8px] left-[8px] w-[91%] h-[94%] bg-red-700/0 hidden z-10 text-white ease-in duration-300 group-hover:block group-hover:bg-red-700/50">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  {item.name}
                </div>
              </div>
            </a>
          ))}
        </div>
        <button
          className="w-8 h-8 rounded-full text-white opacity-50 ease-in-out duration-300 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        >
          <i class="fas fa-chevron-right ml-2 text-2xl"></i>
        </button>
      </div>
    </>
  );
}

export default CastCarousel;
