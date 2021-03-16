import './styles/App.css';
import Navbar from './components/Navbar';

//Contents
import Home from './contents/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Home />
      </div>
    </Router>
  );
}

export default App;
