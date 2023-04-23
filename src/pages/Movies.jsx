import { ApiSearchMovies } from 'components/ApiUrl/ApiURL';
import Movies from 'components/Movies/Movies';
import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { Item, List, StyledLink } from './Detals.styled';
import image from '../images/image.jpg';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  const hendleTakeSubmit = nameValue => {
    if (nameValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: nameValue });
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      ApiSearchMovies(query)
        .then(data => {
          if (data.results.length <= 0) {
            Notiflix.Notify.failure(
              ' Find nothing... Please input correct value'
            );
            return;
          }
          setSearchMovies(data.results);
        })
        .catch(error => console.log(error))
        .finally(setIsLoading(false));
    }
  }, [query]);

  return (
    <>
      <Movies submit={hendleTakeSubmit} />
      {isLoading && <Loader />}
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
                <StyledLink to={`${id}`} state={{ from: location }}>
                  {title}
                </StyledLink>
              </Item>
            );
          })}
      </List>
    </>
  );
};
export default MoviesPage;
