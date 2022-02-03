import React, {useState, useEffect} from 'react'
import Weapon from './Weapon'
import Armour from './Armour'
import { Card, CardTitle, CardText, Container, Col, Row, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom'


const Home = ({ weapons, setWeapons, armour, setArmour }) =>{
console.log(weapons, armour)

//This is Where we will import the data from the backend and apply it to state

//map through weapon data as to display individual weapon cards
    return (
        <Container>
        <h1 className='title'>Arms And Armour</h1>
        <Link to="/create"><button>Add an Item</button></Link>
        <div className='weapon-row'  >
        {weapons.map(weapon => {
            return(
                <Card className='weapon-card'key={weapon.id}>
                     <CardImg className='card-image' alt="weapon-image" src= {weapon.image}  top />
                    <CardTitle tag= {"h3"}>{weapon.name}</CardTitle>
                    {/* <CardText> {weapon.description} </CardText> */}
                     <Link to={`/weapon/${weapon._id}`} >Click for description</Link>
                </Card>
            )
        })}
        </div>
        <div className='armour-row'>
        {armour.map(armour => {
            return(
                <div className='weapon-card'key={armour.id}>
                     <CardImg className='card-image' alt="armour-image" src= {armour.image}  top/>
                    <CardTitle tag= {"h3"}>{armour.name}</CardTitle>
                    {/* <CardText> {armour.description} </CardText> */}
                     <Link to={`/armour/${armour._id}`} >Click for description</Link>
                </div>
            )
        })}
        </div>
        </Container>
    )
}

export default Home