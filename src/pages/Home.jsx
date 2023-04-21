import { ApiTrendMovies } from '../components/ApiUrl/ApiURL';
import { Title } from 'components/Home/Home.styled';
import Loader from 'components/Loader/Loader';

import { useEffect, useState } from 'react';
import { Item, List, StyledLink } from './Detals.styled';
import image from '../images/image.jpg';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    ApiTrendMovies().then(data => {
      setMovies(data.results);
    });
    setLoading(false);
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {loading && <Loader />}
      <List>
        {movies.length &&
          movies.map(({ title, id, poster_path }, index) => {
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
                <StyledLink to={`movies/${id}`}>{title}</StyledLink>
              </Item>
            );
          })}
      </List>
    </>
  );
};
export default Home;
