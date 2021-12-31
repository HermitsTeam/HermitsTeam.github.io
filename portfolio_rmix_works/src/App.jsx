import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
