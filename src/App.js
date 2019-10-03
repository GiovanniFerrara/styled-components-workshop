import React from 'react';
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  background: #f00;
  color: #fff;
  font-size: 50px;
  border: 5px solid #00f;
`

const App = () => {
  return (
    <AppWrapper>
      <Container>
        Buongiorno Sportradar
      </Container>
    </AppWrapper>
  );
}

export default App;
