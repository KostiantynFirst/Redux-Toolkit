import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  p {
    flex: 1;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;