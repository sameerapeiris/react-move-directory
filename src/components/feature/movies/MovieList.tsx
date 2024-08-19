import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./MoveSlice";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../../app/store";
import { Col, Container, Image, Pagination, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import MovieSearch from "./MovieSearch";
import { noPreview } from "../../../assert/img";
import Loader from "../../layout/loader/Loader";

const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { movies, currentPage, totalPages, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  const [isSearching, setIsSearching] = useState<boolean>(false);
  const itemsPerPage = 10;

  useEffect(() => {
    if (!isSearching) {
      dispatch(fetchMovies(currentPage));
    }
  }, [dispatch, currentPage, isSearching]);

  const handleSearch = () => {
    setIsSearching(true);
  };
  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`); // Navigate to the movie detail page
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => dispatch(fetchMovies(i))}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className="en-movies__list">
      <Row>
        <Col>
          {" "}
          <h1 className="en-movies__list--header">All movies</h1>
        </Col>
        <Col className="en-movies__list--search">
          <MovieSearch onSearch={handleSearch} />
        </Col>
      </Row>
      <Row className="en-movies__list--wrap">
        {movies.slice(0, itemsPerPage).map((movie) => (
          <Col lg={2} md={3} sm={6} xs={12} key={movie.id}>
            <div
              className="en-movies__list--card"
              onClick={() => handleMovieClick(movie.id)}
              style={{ cursor: "pointer" }}
            >
              {movie.poster_path ? (
                <div className="en-movies__list--card-img">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="en-movies__list--card-rating d-flex">
                    <div>
                      <p className="m-0 d-flex align-items-center">
                        {" "}
                        <FaStar className="pe-2" />
                        <span>Rating</span>
                      </p>
                    </div>
                    <div>
                      <span>{movie.vote_average.toFixed(1)} / 10</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="en-movies__list--card-img">
                  <Image src={noPreview} alt={movie.title} />
                </div>
              )}
              <h2 className="en-movies__list--card-title">{movie.title}</h2>
              {/* <p className="en-movies__list--card-desc">{movie.overview}</p> */}

              <p>Release Date: {movie.release_date}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="en-movies__list--pagination">
        <Pagination>
          <Pagination.First
            onClick={() => dispatch(fetchMovies(1))}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => dispatch(fetchMovies(currentPage - 1))}
            disabled={currentPage === 1}
          />
          {renderPageNumbers()}
          <Pagination.Next
            onClick={() => dispatch(fetchMovies(currentPage + 1))}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => dispatch(fetchMovies(totalPages))}
            disabled={currentPage === totalPages}
          />
          <Pagination.Item disabled>Total Pages: {totalPages}</Pagination.Item>
        </Pagination>
      </Row>
    </Container>
  );
};

export default MovieList;
