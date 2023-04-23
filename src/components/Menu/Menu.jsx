import { Outlet } from 'react-router-dom';
import { StyledLink } from './Menu.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Menu;
