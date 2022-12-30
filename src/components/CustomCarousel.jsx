import React from "react";
import { config } from "../config";

function CustomCarousel({ data, type }) {
  const slideLeft = () => {
    var slider = document.getElementById(type);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(type);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative flex items-center">
        <button
          className="w-8 h-8 rounded-full text-white opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        >
          <i class="fas fa-chevron-left mr-2 text-2xl"></i>
        </button>
        <div
          id={type}
          className="w-full h-full pb-2 overflow-y-hidden overflow-x-auto overscroll-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => {
            return (
              <a
                className="group inline-block text-center"
                href={`/movie/${item.id}`}
              >
                <img
                  className="w-[120px] md:w-[220px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={config.api.imageUrl + item.poster_path}
                  alt="/"
                />
              </a>
            );
          })}
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

export default CustomCarousel;
