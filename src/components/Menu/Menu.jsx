import { Outlet } from 'react-router-dom';
import { StyledLink } from './Menu.styled';

const Menu = () => {
  return (
    <>
      <ul>
        <h2>Additional informathion</h2>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Menu;
