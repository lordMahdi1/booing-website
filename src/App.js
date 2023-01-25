import './App.css';
import {useState, useEffect} from 'react'
import { BarLoader } from 'react-spinners';
import React from 'react';
import Puce from './Puces/Puce';
import Icon from './Icons/Icon';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar';
import Home from './Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Chisiamo from './Chisiamo/Chisiamo';
import Dashboard from './Dashboard/Dashboard';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    setTimeout(() =>{

    setLoading(false)
  }, 1000)
  }, [])

  return (
  <div>
    {
      loading?
      <BarLoader color={'#FFFFFF'} loading={loading} size={100}/>
      :     
      <Router>
      <Routes>
        
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/chisiamo' element={<Chisiamo/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
     
     </Routes>
     </Router>
    
}
  </div>
    );
}

export default App;
