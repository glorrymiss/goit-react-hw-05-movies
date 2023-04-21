import { ApiTrendMovies } from '../components/ApiUrl/ApiURL';
import { Title } from 'components/Home/Home.styled';
import Loader from 'components/Loader/Loader';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    ApiTrendMovies().then(data => {
      setMovies(prevState => [...prevState, ...data.results]);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {loading && <Loader />}
      <ul>
        {movies.length &&
          movies.map(({ title, id }, index) => {
            return (
              <li key={index}>
                <NavLink to={`movies/${id}`}>{title}</NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Home;
