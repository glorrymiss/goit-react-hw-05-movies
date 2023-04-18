// import Header from 'components/Header/Header';
// import { Outlet } from 'react-router-dom';

import { Api } from 'components/Api/Api';
// import Home from 'components/Home/Home';
import { useEffect, useState } from 'react';
import { Title } from './HomePage.styled';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Api().then(data => {
      setMovies(prevState => [...prevState, ...data.results]);
      // console.log(movies);
      // console.log(movies.length);
    });
  }, []);

  console.log(movies);

  return (
    <>
      <Title>Trending Today</Title>
      <ul>
        {movies.length > 0 &&
          movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <NavLink>{title}</NavLink>
              </li>
            );
          })}
      </ul>
      {/* {movies.length > 0 &&
        movies.map((movie, index) => {
          console.log(movie);
          return <div key={index}>{movie.title}</div>;
        })} */}
    </>
  );
};
export default HomePage;
