import styled, { keyframes } from 'styled-components'

const Loaded = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }

`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 50px);
`

const Loading = styled.div`
  position: relative;
  border: 3px solid rgb(50, 50, 50);
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

const Svg = styled.svg`
  position: absolute;
  top: -4px;
  left: -4px;
  width: 60px;
  height: 60px;
  fill: transparent;
  stroke: rgb(129, 107, 255);
  stroke-width: 4px;
  stroke-dasharray: calc(29 * 3.14);
  transform: rotate(-90deg);
  animation: 1s ${Loaded} infinite forwards;
`

const Loader = () => (
  <Container>
    <Loading>
      <Svg>
        <circle cx="30" cy="30" r="29"></circle>
      </Svg>
    </Loading>
  </Container>
)

export default Loader
