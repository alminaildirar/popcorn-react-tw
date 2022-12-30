import React from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../services/MovieService";
import Loader from "./Loader";
import Error from "./Error";
import CustomCarousel from "./CustomCarousel";
import CustomCarouselHeader from "./CustomCarouselHeader";

const TopRated = () => {
  const { isLoading, isError, data } = useQuery(
    ["get-top-rated-movies"],
    getTopRatedMovies
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div className="my-6">
      <CustomCarouselHeader title={"top rated"} />
      <CustomCarousel type={"toprated"} data={data.results} />
    </div>
  );
};

export default TopRated;
