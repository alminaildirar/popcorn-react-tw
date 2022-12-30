import React from "react";
import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../services/MovieService";
import Loader from "./Loader";
import Error from "./Error";
import CustomCarousel from "./CustomCarousel";
import CustomCarouselHeader from "./CustomCarouselHeader";

const NowPlaying = () => {
  const { isLoading, isError, data } = useQuery(
    ["get-now-playing-movies"],
    getNowPlayingMovies
  );

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div className="my-6">
      {" "}
      <CustomCarouselHeader title={"nowplaying"} />
      <CustomCarousel type={"nowplaying"} data={data.results} />
    </div>
  );
};

export default NowPlaying;
