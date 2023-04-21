// import { ApiSearchMovies } from 'components/ApiUrl/ApiURL';
// import axios from 'axios';
import { KEY, URL } from 'components/ApiUrl/ApiURL';
import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [loading, setLoading] = useState(false);

  const hendleTakeSubmit = nameValue => {
    setNameValue(nameValue);
  };

  useEffect(() => {
    if (nameValue) {
      setLoading(true);
      fetch(
        `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${nameValue}`
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

      // ApiSearchMovies().then(data => {
      //   setSearchMovies(prevState => [...prevState, ...data.results]);
      // });
    }
  }, [nameValue]);

  return (
    <>
      <Movies submit={hendleTakeSubmit} />
      {loading && <Loader />}
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
