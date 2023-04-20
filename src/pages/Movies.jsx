import { ApiSearchMovies } from 'components/ApiUrl/ApiURL';
import Movies from 'components/Movies/Movies';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    ApiSearchMovies().then(data => {
      setSearchMovies(prevState => [...prevState, ...data.results]);
    });
  }, []);

  return (
    <>
      <Movies />
      <ul>
        {searchMovies &&
          searchMovies.map(({ title, id }, index) => {
            console.log(id);
            return (
              <li key={index}>
                <NavLink to={`${id}`}>{title}</NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default MoviesPage;
