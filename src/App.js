import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Beer from './components/Beer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:beerId' element={<Beer />} />
      </Routes>
    </Router>
  );
}

export default App;
