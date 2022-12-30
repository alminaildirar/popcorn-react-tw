import React from "react";
import { config } from "../config";

const Image = ({ title, path }) => {
  return (
    <div className="aspect-w-3 aspect-h-2">
      <img
        className="object-cover rounded-t-lg"
        src={config.api.imageUrl + path}
        alt={title}
      />
    </div>
  );
};

export default Image;
