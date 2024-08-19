import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovies } from "./MoveSlice";
import { RootState, AppDispatch } from "../../../app/store";
import { Col, Container, Form, Image, Pagination, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import MoveButton from "../../atoms/button/Button";

const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, currentPage, totalPages, loading, error } = useSelector(
    (state: RootState) => state.movies
  );
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null); // Create a ref for the search input

  useEffect(() => {
    if (isSearching && searchQuery) {
      dispatch(searchMovies({ query: searchQuery, page: currentPage }));
    } else {
      dispatch(fetchMovies(currentPage));
    }
  }, [dispatch, currentPage, isSearching, searchQuery]);
  const handlePageChange = (pageNumber: number) => {
    dispatch(fetchMovies(pageNumber)); // Fetch movies for the selected page
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const handleSearch = (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    setIsSearching(true);
    dispatch(searchMovies({ query: searchQuery, page: 1 }));
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleClearSearch = () => {
    setIsSearching(false);
    setSearchQuery("");
    dispatch(fetchMovies(1));
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const onChangeSearch = (e: any) => {

    setSearchQuery(e.target.value);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
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
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className="en-movies__list">
      <Row>
        <Col>
          {" "}
          <h1 className="en-movies__list--header">All movies</h1>
        </Col>
        <Col>
          <Form onSubmit={handleSearch} className="mb-4">
            <Form.Group controlId="searchQuery">
              <Form.Control
                type="text"
                placeholder="Search for a movie..."
                value={searchQuery}
                ref={searchInputRef} // Attach the ref to the input element
                onChange={(e) => onChangeSearch(e)}
              />
            </Form.Group>
            <MoveButton type="submit" variant="primary" className="me-2">
              Search
            </MoveButton>
            <MoveButton variant="secondary" onClick={handleClearSearch}>
              Clear
            </MoveButton>
          </Form>
        </Col>
      </Row>
      <Row className="en-movies__list--wrap">
        {movies.map((movie: any) => (
          <Col lg={2} md={3} sm={6} xs={12} key={movie.id}>
            <div className="en-movies__list--card">
              {movie.poster_path && (
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
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {renderPageNumbers()}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Item disabled>Total Pages: {totalPages}</Pagination.Item>
        </Pagination>
      </Row>
    </Container>
  );
};

export default MovieList;
