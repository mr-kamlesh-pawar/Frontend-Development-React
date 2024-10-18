import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import MainComp from './components/MainComp';
import About from './components/About';

function App() {
  return (
    <div className="App">

<nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink> 

    </li>
    <li>
      <NavLink to="/about">About</NavLink> 

    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink> 

    </li>
    
  </ul>
</nav>






   <Routes>
    <Route path='/' element={<MainComp/>}>

    <Route index element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<div>Page Not Found 404</div>} />
    
    </Route>

   </Routes>





    </div>
  );
}

export default App;
 