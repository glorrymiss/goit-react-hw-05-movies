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
  /* align-items: center;
  justify-content: start; */
`;

export const HomeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid whitesmoke;
  justify-content: space-around;
  padding: 10px;
  width: calc(((80%-80px) / 4));
`;

export const StyledLink = styled(NavLink)`
  color: whitesmoke;
  :hover {
    color: orangered;
  }
`;

export const Button = styled.button`
  /* display: block; */
  border: none;
  border-radius: 50%;
  color: orangered;
  width: 60px;
  height: 35px;
  border: solid 1px orangered;
  background-color: #333333;
  :hover,
  :focus {
    background-color: orangered;
  }
`;

export const StyledBtnLink = styled(NavLink)`
  color: orangered;
  :hover {
    color: #333333;
  }
`;
