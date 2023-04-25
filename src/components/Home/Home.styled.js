import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 32px;
  color: green;
  margin: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
