import { ApiTrendMovies } from '../components/ApiUrl/ApiURL';
import { Title } from 'components/Home/Home.styled';

import { useEffect, useState } from 'react';
import { Item, List, StyledLink } from './Detals.styled';
import image from '../images/image.jpg';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    ApiTrendMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
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
