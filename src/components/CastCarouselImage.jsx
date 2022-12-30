import React from "react";
import { config } from "../config";
const CastCarouselImage = ({ url, title }) => {
  let imageUrl = !url ? "../images/avatar.png" : config.api.imageUrl + url;
  console.log(imageUrl);
  return (
    <img
      className="w-[90px] md:w-[150px]  m-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
      src={imageUrl}
      alt="/"
    />
  );
};

export default CastCarouselImage;
