// import { ApiDetalsMovies } from 'components/ApiUrl/ApiURL';
import { KEY, URL } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Wrap, WrapText } from './Detals.styled';
// import { NavLink } from 'react-router-dom';

const MovieDetals = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      fetch(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Sorry, not found`));
        })

        .then(data => {
          setMovie(data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [movieId]);

  const date = new Date(movie.release_date);
  const year = date.getFullYear();
  const score = Math.round(movie.vote_average);

  const { original_title, overview, poster_path, genres } = movie;
  return (
    <>
      <button type="button">
        <Link to="/">On the main</Link>
      </button>
      {loading && <Loader />}
      {!loading && (
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
      )}
      {!loading && <Menu />}
    </>
  );
};
export default MovieDetals;
