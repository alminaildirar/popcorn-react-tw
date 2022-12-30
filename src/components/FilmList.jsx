import React from "react";
import Card from "./Card";

const FilmList = ({ data, type }) => {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap gap-8 justify-center backdrop-blur shadow-card ">
          {data?.pages &&
            data.pages.map((page) =>
              page.results.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))
            )}
          {!data?.pages &&
            data.results.map((item) => (
              <Card key={item.id} data={item} type={type} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilmList;
