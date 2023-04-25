import { ApiTrendMovies } from '../components/ApiUrl/ApiURL';

import { useEffect, useState } from 'react';
import { Item, List, MainTitle, StyledLink, Title } from './Detals.styled';
import img from '../images/img.jpg';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    ApiTrendMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MainTitle>Trending Today</MainTitle>
      <List>
        {movies.length &&
          movies.map(({ title, id, poster_path }, index) => {
            return (
              <Item key={index}>
                <StyledLink to={`movies/${id}`}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : img
                    }
                    alt={title}
                    width="200"
                  />
                  <Title>{title}</Title>
                </StyledLink>
              </Item>
            );
          })}
      </List>
    </>
  );
};
export default Home;
