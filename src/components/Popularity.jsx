import React from "react";

const Popularity = ({ popularity }) => {
  return (
    <div className="my-2 ">
      <p>
        <i className="fa-solid fa-fire text-red-400 mr-1"></i>
        <span className="text-white">{popularity.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default Popularity;
