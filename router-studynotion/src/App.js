import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';


function App() {
let [isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <div className="w-screen h-lvh min-h-screen overflow-y-auto  flex flex-col bg-gray-900  text-white">
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>

<Route path="/"  element={<Home isLoggedIn={isLoggedIn}/>}/>
<Route path="login"  element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path="signup"  element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path="dashboard"  element={
  <PrivateRoute isLoggedIn={isLoggedIn}>
    <Dashboard/>

  </PrivateRoute>
  
  }/>

    </Routes>



    </div>
  );
}

export default App;
