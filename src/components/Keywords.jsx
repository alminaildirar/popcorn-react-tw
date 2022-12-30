import React from "react";
import { useQuery } from "react-query";
import Loader from "./Loader";
import Error from "./Error";
import { getMovieKeywords } from "../services/MovieService";

const Keywords = ({ id }) => {
  const { isLoading, isError, data, isSuccess } = useQuery(
    ["get-movie-keywords", id],
    () => getMovieKeywords(id)
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div>
      {isSuccess &&
        data.keywords.map((item) => (
          <span className="italic pr-4">#{item.name}</span>
        ))}
    </div>
  );
};

export default Keywords;
