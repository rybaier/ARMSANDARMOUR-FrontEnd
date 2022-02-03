import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Home from './components/Home';
import Weapon from './components/Weapon';
import Armour from './components/Armour';

//this is the vessel for the home page and routes home route will be populated by route path '/'
function App() {

  //  pull all data from the backend here 
  // then pass as props (check)

  const [weaponData, setWeaponData] = useState(null)
  const [armourData, setArmourData] = useState(null)

  //create async function to use for the data gather 
  const URL = 'http://localhost:8000/'
  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json))
    //Get Data from backend
    //set Data to state 

  }, [])
  if (weaponData === null || armourData === null ){
    return(
      <h1> Loading Arms and Armour</h1>
    )
  }

  return (
    <Container className='Home'>
       <Routes>
         <Route path= '/' element= {<Home weapons = {weaponData} setWeapons ={setWeaponData} armour = {armourData} setArmour = {setArmourData} />} />
         <Route path='./components/Armour.js' element= {<Armour armour = {armourData} setArmour = {setArmourData} />} />
         <Route path= './components/Weapon.js' element= {<Weapon weapons = {weaponData} setWeapons ={setWeaponData} />} />
       </Routes>
    </Container>
  );
}

export default App;
