import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 36px;
  color: white;
  margin: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
