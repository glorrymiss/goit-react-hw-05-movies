import { ApiDetalsMovies } from 'components/ApiUrl/ApiURL';
import Menu from 'components/Menu/Menu';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const MovieDetals = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    ApiDetalsMovies().then(data => {
      setMovie(data);
    });
  }, [movieId]);
  // console.log(movie);
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
      <Menu />
    </>
  );
};
export default MovieDetals;
