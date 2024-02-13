import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, Login } from "../pages/index";

import React from "react";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-rgb-800">
      <Routes>
        <Route
          path="now_playing"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />

        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="" element={<Login apiPath="login" />} />
      </Routes>
    </div>
  );
};
