import { Container, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <nav>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </Container>
  );
};

export default Header;
