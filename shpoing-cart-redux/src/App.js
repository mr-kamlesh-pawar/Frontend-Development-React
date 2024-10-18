import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="">
      <div>
        <NavBar/>

      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
