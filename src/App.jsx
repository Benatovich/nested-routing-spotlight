import { BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import List from './views/List'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/characters'>
          <List />
        </Route>
        <Route path='/'>
          <Redirect to='/characters' />
        </Route>
      </Switch>
    </Router>
  )
}
