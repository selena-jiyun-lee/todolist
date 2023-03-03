import React from 'react';
import ToDoList from './ToDoList';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #4a69bd;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <RecoilRoot>
      <Container>
        <GlobalStyle />
        <ToDoList />
      </Container>
    </RecoilRoot>
  );
}

export default App;
