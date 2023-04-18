import { NavLink } from 'react-router-dom';
import { Container, NavText } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">
          <NavText>Home</NavText>
        </NavLink>

        <NavLink to="/movies">
          <NavText>Movies</NavText>
        </NavLink>
      </nav>
    </Container>
  );
};

export default Header;
