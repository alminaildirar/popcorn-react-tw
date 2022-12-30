import React from "react";

const ReleaseDate = ({ releaseDate }) => {
  releaseDate = releaseDate.substring(0, 4);
  return (
    <div>
      <span>
        <i className="fa-solid fa-calendar-days pr-2"></i>
        {releaseDate}
      </span>
    </div>
  );
};

export default ReleaseDate;
