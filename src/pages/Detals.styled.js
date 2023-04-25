import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
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
  margin: 20px auto;
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
`;
export const Item = styled.li`
  border: 1px solid whitesmoke;
  justify-content: space-around;

  width: calc(((90%-60px) / 4));
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: whitesmoke;
  transition: color 250ms linear;
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
  margin-bottom: 5px;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: orangered;
  }
`;

export const StyledBtnLink = styled(NavLink)`
  color: orangered;
  transition: color 250ms linear;
  :hover {
    color: #333333;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 14px;
`;

export const MainTitle = styled.h1`
  font-size: 28px;
  color: whitesmoke;
  margin: 10px auto;
`;
