import React from "react";
import { useQuery } from "react-query";
import { getMovieCredits } from "../services/MovieService";
import Error from "./Error";
import Loader from "./Loader";
import CastCarousel from "./CastCarousel";

const Cast = ({ id }) => {
  const { isLoading, isError, data } = useQuery(["get-movie-credits", id], () =>
    getMovieCredits(id)
  );
  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div>
      <CastCarousel data={data.cast} />
    </div>
  );
};

export default Cast;
