import { StyledLink, Title } from '../Home/Home.styled';
import PropTypes from 'prop-types';

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
Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
