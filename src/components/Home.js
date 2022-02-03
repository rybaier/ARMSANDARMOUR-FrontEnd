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
        <h2> Home component</h2>
        <Row>
        {weapons.map(weapon => {
            return(
                <Card className='weapon-card'key={weapon.id}>
                     <CardImg alt="weapon-image" src= {weapon.image}  top width="20%" />
                    <CardTitle tag= {"h3"}>{weapon.name}</CardTitle>
                    {/* <CardText> {weapon.description} </CardText> */}
                     <Link to= '/weapon/:id' id={weapon.id}>Click for description</Link>
                </Card>
            )
        })}
        </Row>
        </Container>
    )
}

export default Home