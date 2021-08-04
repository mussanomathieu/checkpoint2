import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GameList from './pages/GameList';
import GameDetail from './components/GameDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'component={GameList}/>
          <Route path='/:id' component={GameDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
