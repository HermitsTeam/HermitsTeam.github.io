import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu'

function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Routes>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
