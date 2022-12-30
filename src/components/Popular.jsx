import React from "react";
import { useQuery } from "react-query";
import { getPopularMovies } from "../services/MovieService";
import Loader from "./Loader";
import Error from "./Error";
import CustomCarousel from "./CustomCarousel";
import CustomCarouselHeader from "./CustomCarouselHeader";

const Popular = () => {
  const { isLoading, isError, data } = useQuery(
    ["get-popular-movies"],
    getPopularMovies
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div className="my-6">
      <CustomCarouselHeader title={"popular"} />
      <CustomCarousel type={"popular"} data={data.results} />
    </div>
  );
};

export default Popular;
