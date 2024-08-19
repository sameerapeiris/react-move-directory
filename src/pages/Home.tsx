import React from "react";
import Layout from "../components/layout/Layout";
import LandingArea from "../components/layout/landing-area/LandingArea";
import About from "../components/layout/about/About";
import MovieList from "../components/feature/movies/MovieList";

const Home = () => {

  return (
    <div id="home">
      <Layout>
        <LandingArea />
        <MovieList />
    
      </Layout>
    </div>
  );
};

export default Home;
