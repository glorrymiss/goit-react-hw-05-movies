import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterBack = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  background-color: #333333;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const StyledLink = styled(NavLink)`
  color: whitesmoke;
  margin-left: 30px;
  margin-bottom: 10px;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
`;
