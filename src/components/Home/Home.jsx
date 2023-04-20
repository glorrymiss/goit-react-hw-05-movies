// import { NavLink } from 'react-router-dom';

import { StyledLink, Title } from '../Home/Home.styled';

const Home = ({ movies }) => {
  return (
    <>
      <Title>Trending Today</Title>
      <ul>
        {movies.length &&
          movies.map(({ title }, index) => {
            return (
              <li key={index}>
                <StyledLink>{title}</StyledLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
