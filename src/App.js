import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Home from './components/Home';
import Weapon from './components/Weapon';
import Armour from './components/armour';


function App() {
  return (
    <Container className='Home'>
       <Routes>
         <Route path= '/' element= {<Home />} />
         <Route path='./components/Armour.js' element= {<Armour/>} />
         <Route path= './components/Weapon.js' element= {<Weapon />} />
       </Routes>
    </Container>
  );
}

export default App;
