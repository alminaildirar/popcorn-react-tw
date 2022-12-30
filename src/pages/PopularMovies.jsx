import React from "react";
import { useInfiniteQuery } from "react-query";
import { getPopularMovies } from "../services/MovieService";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Error from "../components/Error";
import FilmList from "../components/FilmList";
import LoadMore from "../components/LoadMore";

const PopularMovies = () => {
  const { isLoading, data, hasNextPage, fetchNextPage, isSuccess, isError } =
    useInfiniteQuery(["get-popular-films"], getPopularMovies, {
      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length < lastPage.total_pages) return lastPage.page + 1;
        return false;
      },
    });

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  return (
    <div>
      <Navbar />
      <div className="flex-col text-center">
        {isSuccess && <FilmList data={data} type={"popular"} />}
        <LoadMore hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
      </div>
    </div>
  );
};

export default PopularMovies;
