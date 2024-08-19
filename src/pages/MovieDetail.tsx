import React from "react";
import Layout from "../components/layout/Layout";
import MovieDetails from "../components/feature/movies/MovieDetails";

const MovieDetail = () => {
  return (
    <div id="home">
      <Layout>
        <MovieDetails />
      </Layout>
    </div>
  );
};

export default MovieDetail;
