import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
