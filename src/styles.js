import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1A1A1A;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #0F0F0F;
  border-radius: 15px;
  width: 80%;
  max-width: 750px;
`

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
`

export const Column = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`