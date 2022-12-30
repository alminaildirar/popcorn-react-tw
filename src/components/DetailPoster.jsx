import React from "react";
import { config } from "../config";

const DetailPoster = ({ title, path }) => {
  return (
    <div className="">
      <div className="grid max-w-[500px] w-full ">
        <img
          className=" w-full h-full object-cover"
          src={config.api.imageUrl + path}
          alt={title}
        />
      </div>
    </div>
  );
};

export default DetailPoster;
