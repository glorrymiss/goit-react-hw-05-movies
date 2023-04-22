import { KEY, URL } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';

import { useEffect, useState } from 'react';
import { Item, List, StyledLink } from './Detals.styled';
import image from '../images/image.jpg';
import { useSearchParams } from 'react-router-dom';
const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [loading, setLoading] = useState(false);

  const hendleTakeSubmit = nameValue => {
    setSearchParams({ query: nameValue });
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(
        `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Sorry, not found`));
        })
        .then(data => setSearchMovies(data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <>
      <Movies submit={hendleTakeSubmit} />
      {loading && <Loader />}
      <List>
        {searchMovies &&
          searchMovies.map(({ title, id, poster_path }, index) => {
            console.log(id);
            return (
              <Item key={index}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : image
                  }
                  alt={title}
                  width="200"
                />
                <StyledLink to={`${id}`}>{title}</StyledLink>
              </Item>
            );
          })}
      </List>
    </>
  );
};
export default MoviesPage;
