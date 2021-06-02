import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 10;
`

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  color: ${(props) => (props.current ? 'rgb(127, 109, 255)' : '#fff')};
  border-bottom: 4px solid
    ${(props) => (props.current ? 'rgb(127, 109, 255)' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
))
