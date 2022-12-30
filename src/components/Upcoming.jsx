import React from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../services/MovieService";
import Loader from "./Loader";
import Error from "./Error";
import CustomCarousel from "./CustomCarousel";
import CustomCarouselHeader from "./CustomCarouselHeader";

const Upcoming = () => {
  const { isLoading, isError, data } = useQuery(
    ["get-upcoming-movies"],
    getUpcomingMovies
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div className="my-6">
      <CustomCarouselHeader title={"upcoming"} />
      <CustomCarousel type={"upcoming"} data={data.results} />
    </div>
  );
};

export default Upcoming;
