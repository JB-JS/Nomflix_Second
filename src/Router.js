import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import TV from './Routes/TV'
import Detail from './Routes/Detail'
import Search from './Routes/Search'
import Header from './components/Header'

const Router = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      {/* <Route
        path="https://jb-js.github.io/Nomflix_Second/"
        exact
        component={Home}
      /> */}

      {/* <Route
        path="https://jb-js.github.io/Nomflix_Second/tv"
        exact
        component={TV}
      />
      <Route
        path="https://jb-js.github.io/Nomflix_Second/movie/:id"
        component={Detail}
      />
      <Route
        path="https://jb-js.github.io/Nomflix_Second/tv/:id"
        component={Detail}
      />
      <Route
        path="https://jb-js.github.io/Nomflix_Second/search"
        component={Search}
      />
      <Redirect from="*" to="/" /> */}
    </Switch>
  </BrowserRouter>
)

export default Router
