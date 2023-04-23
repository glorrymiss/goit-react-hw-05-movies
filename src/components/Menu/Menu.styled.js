import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  margin-bottom: 16px;
  color: whitesmoke;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
`;
