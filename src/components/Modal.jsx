import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { config } from "../config";
import { getMovieTrailer } from "../services/MovieService";
import Loader from "./Loader";
import Error from "./Error";

const Modal = ({ modal, setModal, id }) => {
  useEffect(() => {
    setModal(true);
  }, []);

  const { isLoading, isError, data } = useQuery(
    ["get-movie-trailers", id],
    () => getMovieTrailer(id)
  );
  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  const videos = data?.results;
  const videoKey = videos.filter(
    (video) => video.type == "Trailer" && video.site == "YouTube"
  )[0].key;
  const video = config.api.videoBaseUrl + videoKey;

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-[100%] h-[100%] bg-black/50 ${
          modal === true ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`grayscale-0 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] md:w-[70%] lg:w-[50%] h-[50%] flex-col items-end bg-black  ${
          modal === true ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => setModal(false)}
          className="w-[32px] h-[32px] rounded-full bg-red-400 text-center hover:bg-red-700"
        >
          <i className="fas fa-times text-white text-2xl"></i>
        </button>
        <div className="w-[100%] h-[100%] aspect-video bg-black">
          <iframe className="w-[100%] h-[100%]" src={video}></iframe>
        </div>
      </div>
    </>
  );
};

export default Modal;
