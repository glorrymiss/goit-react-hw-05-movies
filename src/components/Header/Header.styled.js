import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #696969;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;

  color: lightpink;
  margin: 20px;

  :hover {
    color: white;
  }
`;
