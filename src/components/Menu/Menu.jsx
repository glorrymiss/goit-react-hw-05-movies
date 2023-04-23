import { Outlet } from 'react-router-dom';
import { StyledLink, Title } from './Menu.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Menu = () => {
  return (
    <>
      <ul>
        <Title>Additional informathion</Title>
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
