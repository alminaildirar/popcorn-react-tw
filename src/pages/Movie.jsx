import React, { useState } from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieImages } from "../services/MovieService";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Modal from "../components/Modal";
import DetailPoster from "../components/DetailPoster";
import DetailHeader from "../components/DetailHeader";
import GenreTags from "../components/GenreTags";
import Runtime from "../components/Runtime";
import ReleaseDate from "../components/ReleaseDate";
import Error from "../components/Error";

import Cast from "../components/Cast";
import Loader from "../components/Loader";

const Movie = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const results = useQueries([
    {
      queryKey: ["get-movie", id],
      queryFn: async () => await getMovieById(id),
    },
    {
      queryKey: ["get-movie-images", id],
      queryFn: async () => await getMovieImages(id),
    },
  ]);

  if (results[0].error || results[1].error) return <Error />;
  if (results[0].isLoading || results[1].isLoading) return <Loader />;
  const movieDetail = results[0]?.data;

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="container mx-auto flex flex-col-reverse lg:flex-row m-10 justify-evenly text-white selection:bg-red-700">
        <div className="w-full lg:w-[30%] flex flex-col-reverse lg:flex-col items-center">
          <DetailPoster
            title={movieDetail.title}
            path={movieDetail.poster_path}
          />
          <div className="my-6">
            <div>
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="text-red-700 text-2xl hover:scale-105 ease-in-out duration-300"
              >
                <i className="fa-solid fa-circle-play text-red-700 pr-2 text-3xl"></i>
                Watch Trailer
              </button>
              {modal && <Modal modal={modal} setModal={setModal} id={id} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:max-w-[55%] px-2 lg:px-0">
          <DetailHeader
            title={movieDetail.title}
            vote={movieDetail.vote_average}
          />
          <GenreTags genres={movieDetail.genres} />
          <div className="flex justify-between mt-5">
            <ReleaseDate releaseDate={movieDetail.release_date} />
            <Runtime runtime={movieDetail.runtime} />
          </div>
          <div className="my-8">
            <Tabs overview={movieDetail.overview} id={id} />
          </div>
          <div className="w-[100%] mb-8">
            <Cast id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
