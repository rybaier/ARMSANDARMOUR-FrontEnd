import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Home from './components/Home';
import Weapon from './components/Weapon';
import Armour from './components/Armour';
import CreateForm from './components/CreateForm';
//this is the vessel for the home page and routes home route will be populated by route path '/'
function App() {

  //  pull all data from the backend here 
  // then pass as props (check)

  const [weaponData, setWeaponData] = useState(null)
  const [armourData, setArmourData] = useState(null)

  //create async function to use for the data gather 
  const weaponURL = 'http://localhost:8000/'
  const armourURL = 'http://localhost:8000/armours'


  useEffect(()=>{
    fetch(weaponURL)
    .then(res => res.json())
    .then(json => setWeaponData(json))
    .then(fetch(armourURL)
    .then(res => res.json())
    .then((json) => setArmourData(json)))  
    //Get Data from backend
    //set Data to state 
    .catch(console.error)

  }, [])
  console.log(weaponData)
  console.log(armourData)
  if (weaponData === null || armourData === null ){
    return(
      <h1> Loading Arms and Armour</h1>
    )
  }

  return (
    <Container className='Home'>
       <Routes>
         <Route path= '/' element= {<Home weapons = {weaponData} setWeapons ={setWeaponData} armour = {armourData} setArmour = {setArmourData} />} />
         <Route path='/armour/:id' element= {<Armour armour = {armourData} setArmour = {setArmourData} />} />
         <Route path= '/weapon/:id' element= {<Weapon weapons = {weaponData} setWeapons ={setWeaponData} />} />
         <Route path= '/create' element= {<CreateForm />} />
       </Routes>
    </Container>
  );
}

export default App;
