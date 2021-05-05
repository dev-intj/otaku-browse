
import './styles/main.scss';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { HashRouter} from 'react-router-dom';

//pages
import Home from './pages/Home';
import DetailCard from './pages/DetailCard';
import Error from './pages/Error';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Switch>
          <Route exact path='/' component={() => <Home/>} />
          <Route  path='/:type/:id/:title' component={() => <DetailCard/>} />
          <Route  path='/search/:type' component={() => <Search/>} />
          <Route path='/404' component={() => <Error/>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
