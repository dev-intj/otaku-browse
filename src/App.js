
import './styles/main.scss';
import Navigationbar from './components/Navigationbar';

import CAW from './components/CopyrightAndWelcome';
import Filter from './components/FilterComponent';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
     <CAW/>
     <Filter/>
    </div>
  );
}

export default App;
