import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../layout/loader/Loader";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genres: { id: number; name: string }[];
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(response.data);
      } catch (error) {
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;

  if (!movie) return null;

  return (
    <>
      <div className="en-movies__detail">
        <Container
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Row className="en-movies__detail-wrap">
            <Col md={4} className="en-movies__detail--poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
            </Col>
            <Col md={8} className="en-movies__detail--desc">
              <div className="en-movies__detail--desc-overlay">
                <h2 className="title">{movie.title}</h2>
                <p className="overview">{movie.overview}</p>
                <p>
                  <strong>Release Date:</strong>
                  <span className="inner-text"> {movie.release_date}</span>
                </p>
                <p>
                  <strong>Genres:</strong>{" "}
                  <span className="inner-text">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="en-movies__detail--btm">
        <h2>{movie.title} Overview</h2>
        <hr />
        <p className="overview">{movie.overview}</p>
      </Container>
    </>
  );
};

export default MovieDetails;
