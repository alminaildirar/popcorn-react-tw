import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import VoteAverage from "./VoteAverage";
import Popularity from "./Popularity";

const Card = ({ data, type }) => {
  return (
    <div className="mt-5 flex-col text-center md:basis-2/6 lg:basis-1/6 rounded-md  bg-gray-800 hover:scale-105 ease-in-out duration-300 ">
      {
        <Link to={`/movie/${data.id}`}>
          <Image path={data.poster_path} title={data.title} />
        </Link>
      }
      {type == "popular" && <Popularity popularity={data.popularity} />}
      {type == "top-rated" && <VoteAverage vote={data.vote_average} />}
    </div>
  );
};

export default Card;
