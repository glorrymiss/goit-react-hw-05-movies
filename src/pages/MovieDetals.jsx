// import { ApiDetalsMovies } from 'components/ApiUrl/ApiURL';
import { KEY, URL } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  const {
    original_title,
    overview,
    release_date,
    poster_path,
    popularity,
    genres,
  } = movie;
  return (
    <>
      <button type="button">
        <Link to="/">On the main</Link>
      </button>
      {loading && <Loader />}
      {!loading && (
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
          <h2>
            {original_title}
            <span>{release_date}</span>
          </h2>
          <p>User score: {popularity * 100}%</p>
          <h3>
            <b>Overview </b>
            {overview}
          </h3>
          <h3>
            <b>Genres</b>
          </h3>
          {genres && genres.map(gen => gen.name).join(', ')}
          <p></p>
        </div>
      )}
      {!loading && <Menu />}
    </>
  );
};
export default MovieDetals;
