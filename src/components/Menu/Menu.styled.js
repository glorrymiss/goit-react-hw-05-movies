import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  margin-bottom: 14px;
  color: whitesmoke;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;
