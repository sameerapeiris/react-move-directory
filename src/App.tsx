import React from 'react';
import "./assert/styles/main.scss";
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>

    </div>
  );
}

export default App;
