import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HomeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
  margin-bottom: 60px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid whitesmoke;
  padding: 10px;
  width: calc(((80%-80px) / 4));
`;

export const StyledLink = styled(NavLink)`
  color: whitesmoke;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;
