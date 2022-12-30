import React from "react";

const VoteAverage = ({ vote }) => {
  return (
    <div className="my-2">
      <p>
        <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
        <span className="text-white">{vote}</span>
      </p>
    </div>
  );
};

export default VoteAverage;
