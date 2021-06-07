import './assets/styles/main.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//pages
import Home from './pages/Home';
import DetailCard from './pages/DetailCard';
import Error from './pages/Error';
import SearchPage from './containers/Search/Results/SearchPage';
import ReactFooter from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router >

        <Switch>
          <Route exact path='/' component={() => <Home />} ></Route>
          <Route path='/details/:type/:id/:title/:tab' component={() => <DetailCard />} ></Route>
          <Route path='/search' component={() => <SearchPage />} ></Route>
          <Route path='/404' component={() => <Error />} ></Route>
        </Switch>

        < ReactFooter/>

      </Router>
    </div>
  );
}

export default App;
