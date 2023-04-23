import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterBack = styled.div`
  min-height: 60px;
  background-color: #222222;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: white;
`;

export const StyledLink = styled(NavLink)`
  color: whitesmoke;
  margin-left: 30px;
  margin-bottom: 10px;
  :hover {
    color: orangered;
  }
`;
