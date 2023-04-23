import { ApiDetalsMovies } from 'components/ApiUrl/ApiURL';
import Menu from 'components/Menu/Menu';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Wrap, WrapText } from './Detals.styled';

const MovieDetals = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (movieId) {
      ApiDetalsMovies(movieId)
        .then(data => setMovie(data))
        .catch(error => console.log(error));
    }
  }, [movieId]);

  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const score = Math.round(movie.vote_average);

  const { original_title, overview, poster_path, genres } = movie;
  return (
    <>
      <button type="button">
        <Link to={backLink.current}>On the main</Link>
      </button>
      <Wrap>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'Sorry'
            }
            alt="original_title"
            width="250"
          />
        </div>
        <WrapText>
          <h2>
            {original_title}
            <span>({year})</span>
          </h2>
          <p>User score: {score * 10}%</p>
          <h3>Overview</h3>
          <p> {overview}</p>
          <p>
            <b>Genres</b>
          </p>
          {genres && genres.map(gen => gen.name).join(', ')}
          <p></p>
        </WrapText>
      </Wrap>
      <Menu />
    </>
  );
};
export default MovieDetals;
