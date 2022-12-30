import { config } from "../config";
import { getDataWithKey, getDataWithToken } from "./DataService";

export const getPopularMovies = async ({ pageParam = 1 }) => {
  const data = await getDataWithKey(
    `${config.api.url}/movie/popular/?page=${pageParam}`
  );
  return data;
};

export const searchMovies = async (query) => {
  const data = await getDataWithKey(
    `${config.api.url}/search/movie/?query=${query}`
  );
  return data;
};

export const getTopRatedMovies = async ({ pageParam = 1 }) => {
  const data = await getDataWithKey(
    `${config.api.url}/movie/top_rated/?page=${pageParam}`
  );
  return data;
};

export const getUpcomingMovies = async () => {
  const data = await getDataWithKey(`${config.api.url}/movie/upcoming`);
  return data;
};

export const getNowPlayingMovies = async () => {
  const data = await getDataWithKey(`${config.api.url}/movie/now_playing`);
  return data;
};

export const getMovieById = async (id) => {
  const data = await getDataWithKey(`${config.api.url}/movie/${id}`);
  return data;
};

export const getMovieImages = async (id) => {
  const data = await getDataWithKey(`${config.api.url}/movie/${id}/images`);
  return data;
};

export const getMovieTrailer = async (id) => {
  const data = await getDataWithKey(`${config.api.url}/movie/${id}/videos`);
  return data;
};

export const getMovieCredits = async (id) => {
  const data = await getDataWithKey(`${config.api.url}/movie/${id}/credits`);
  return data;
};

export const getMovieKeywords = async (id) => {
  const data = await getDataWithKey(`${config.api.url}/movie/${id}/keywords`);
  return data;
};
