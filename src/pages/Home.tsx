import React from "react";
import Layout from "../components/layout/Layout";
import MovieList from "../components/feature/movies/MovieList";

const Home = () => {
  return (
    <div id="home">
      <Layout>
        <MovieList />
      </Layout>
    </div>
  );
};

export default Home;
