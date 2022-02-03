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
        <h1>Arms And Armour</h1>
        <Row className='weapon-row' xxl='3'>
        {weapons.map(weapon => {
            return(
                <Card className='weapon-card'key={weapon.id}>
                     <CardImg alt="weapon-image" src= {weapon.image}  top />
                    <CardTitle tag= {"h3"}>{weapon.name}</CardTitle>
                    {/* <CardText> {weapon.description} </CardText> */}
                     <Link to={`/weapon/${weapon._id}`} >Click for description</Link>
                </Card>
            )
        })}
        </Row>
        <Row className='armour-row'xl='3'>
        {armour.map(armour => {
            return(
                <Card className='weapon-card'key={armour.id}>
                     <CardImg alt="armour-image" src= {armour.image}  top/>
                    <CardTitle tag= {"h3"}>{armour.name}</CardTitle>
                    {/* <CardText> {armour.description} </CardText> */}
                     <Link to={`/armour/${armour._id}`} >Click for description</Link>
                </Card>
            )
        })}
        </Row>
        </Container>
    )
}

export default Home