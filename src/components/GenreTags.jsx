import React from "react";

const GenreTags = ({ genres }) => {
  return (
    <div className="flex gap-4 mt-5">
      <p>
        {genres.map((item, i) => (
          <span key={i}>#{item.name}&thinsp;</span>
        ))}
      </p>
    </div>
  );
};

export default GenreTags;
