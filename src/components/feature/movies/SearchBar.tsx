// src/features/movies/MovieSearch.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from './MoveSlice';
import { Form, Button, InputGroup } from 'react-bootstrap';

const MovieSearch: React.FC = () => {
  const [searchQuery, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
   
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="primary" type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
};

export default MovieSearch;
