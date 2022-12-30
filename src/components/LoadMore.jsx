import React from "react";

const LoadMore = ({ hasNextPage, fetchNextPage }) => {
  return (
    <div>
      {hasNextPage && (
        <button
          className="my-6 px-3 py-2 text-white border border-red-700 rounded-md transition-all ease-in duration-300 hover:bg-red-700"
          onClick={fetchNextPage}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMore;
