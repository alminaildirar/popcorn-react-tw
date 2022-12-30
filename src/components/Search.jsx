import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { searchMovies } from "../services/MovieService";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import FilmList from "../components/FilmList";

const Search = () => {
  const [filter, setFilter] = useState("");
  //const [filterLength, setFilterLength] = useState(fals)
  const debouncedSearchTerm = useDebounce(filter, 500);

  let filterLength = false;
  if (filter.length > 0 && debouncedSearchTerm) {
    filterLength = true;
  }

  const { isLoading, error, data, isSuccess } = useQuery(
    ["search-movie", debouncedSearchTerm],
    () => searchMovies(filter),
    {
      enabled: filterLength,
    }
  );
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="relative mx-auto my-6 w-[250px] md:w-[400px]">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="w-[250px] md:w-[400px] h-[40px] p-2 rounded-2xl placeholder:italic placeholder:text-gray-500 bg-primary text-white border-2 border-red-900 shadow-tabBox outline-0 focus:border-red-700 "
        />
        <span className="absolute right-[10px] top-[50%] translate-y-[-50%] w-[32px] h-[32px] flex items-center justify-center ease-in-out duration-300 cursor-pointer  hover:rounded-full">
          <i class="fa-solid fa-magnifying-glass text-red-900"></i>
        </span>
      </div>
      {isSuccess && <FilmList data={data} type={"popular"} />}
    </div>
  );
};

export default Search;
