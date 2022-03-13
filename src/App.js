import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}>
          </Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
