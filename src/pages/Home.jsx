import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import Search from "../components/Search";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Search />
        <div className="container mx-auto px-2 flex flex-col items-center">
          <Popular />
          <TopRated />
          <Upcoming />
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default Home;
