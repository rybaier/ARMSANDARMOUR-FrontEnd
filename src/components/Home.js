import React, {useState, useEffect} from 'react'
import Weapon from './Weapon'
import Armour from './Armour'
import { Card, CardTitle, CardText, Container, Col, Row} from 'reactstrap'


const Home = ({ weapon, setWeapon, armour, setArmour }) =>{
console.log(weapon, armour)

//This is Where we will import the data from the backend and apply it to state

//map through weapon data as to display individual weapon cards
    return (
        <h2> Home component</h2>
    )
}

export default Home