import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <ul>
        <h3>Additional informathion</h3>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Menu;
