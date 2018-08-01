import styled from 'styled-components'

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: "message";
  grid-template-rows: 1fr;
`
Main.displayName = 'StyledMain'

export default Main
