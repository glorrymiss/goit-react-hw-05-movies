import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px 200px;
`;

export const Input = styled.input`
  min-width: 250px;
  min-height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  margin: 0 10px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Button = styled.button`
  /* display: block; */
  border: none;
  border-radius: 50%;
  color: orangered;
  width: 60px;
  height: 35px;
  transition: color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    color: #333333;
    background-color: orangered;
  }
`;
