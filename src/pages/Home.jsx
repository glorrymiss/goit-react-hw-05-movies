import { ApiTrendMovies } from '../components/ApiUrl/ApiURL';
import { Title } from 'components/Home/Home.styled';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    ApiTrendMovies().then(data => {
      setMovies(prevState => [...prevState, ...data.results]);
    });
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      <ul>
        {movies.length &&
          movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <NavLink to={`movies/${id}`}>{title}</NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Home;
