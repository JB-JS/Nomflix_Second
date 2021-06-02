import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import TV from './Routes/TV'
import Detail from './Routes/Detail'
import Search from './Routes/Search'
import Header from './components/Header'

const Router = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
)

export default Router
