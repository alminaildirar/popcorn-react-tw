import React from "react";

const DetailHeader = ({ title, vote }) => {
  vote = vote.toFixed(1);
  return (
    <div className="flex justify-between">
      <h1 className="text-xl lg:text-4xl">{title}</h1>
      <span className="flex flex-nowrap text-xl lg:text-4xl">
        <i className="fa-solid fa-star pr-3 text-yellow-400 text-xl lg:text-4xl"></i>
        {vote}
      </span>
    </div>
  );
};

export default DetailHeader;
