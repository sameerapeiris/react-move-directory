import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, searchMovies } from "./MoveSlice";
import { Form } from "react-bootstrap";
import MoveButton from "../../atoms/button/Button";
import { AppDispatch } from "../../../app/store";
interface MovieSearchProps {
  onSearch: () => void; // Callback to trigger when search is performed
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      dispatch(fetchMovies(1)); // If the search query is empty, fetch movies
    } else {
      dispatch(searchMovies({ query: searchQuery, page: 1 }));
    }
    onSearch(); // Call the onSearch callback to inform the parent component
  };

  const onChangeSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Form onSubmit={handleSearch} className="mb-4 d-flex justify-content-end">
      <Form.Group controlId="searchQuery">
        <Form.Control
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => onChangeSearch(e)}
        />
      </Form.Group>
      <MoveButton type="submit" variant="primary" className="ms-2">
        Search
      </MoveButton>
    </Form>
  );
};

export default MovieSearch;
