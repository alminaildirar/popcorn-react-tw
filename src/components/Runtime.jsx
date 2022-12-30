import React from "react";

const Runtime = ({ runtime }) => {
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

  const { hours, minutes } = toHoursAndMinutes(parseInt(runtime));

  return (
    <div>
      <span>
        <i className="fa-regular fa-clock pr-2"></i>
        {hours}h {minutes}m
      </span>
    </div>
  );
};

export default Runtime;
