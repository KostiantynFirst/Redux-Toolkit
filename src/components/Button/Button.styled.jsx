import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${(props) => (props.selected ? '#4CAF50' : '#008CBA')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => (props.selected ? '#45a049' : '#0072A2')};
  }
`;
