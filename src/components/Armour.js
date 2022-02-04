import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardTitle, CardText, Container, Col, Row, CardImg} from 'reactstrap'
import CreateForm from './CreateForm';

const Armour = () =>{
    const inArmor = true;
    const myID = useParams();
    const [myArmour, setMyArmour] = useState(null);
    console.log(myID);
    useEffect(()=> {
        fetch(`http://localhost:8000/armours/${myID.id}`)
        .then(res => res.json())
        .then(json => setMyArmour(json))
        .catch(console.error)
    }, []);
    console.log(myArmour);
    if (myArmour === null){
        return <h1> Loading Armour Page</h1>
    } else {
        return (
            <Container>
                <Card className='armour-page'>
                    <CardTitle tag= {"h1"}>{myArmour.name}</CardTitle>
                    <CardImg className='pageimage' alt="armour-image" src= {myArmour.image} />
                    <CardText> {myArmour.description} </CardText>
                </Card>
                <CreateForm myID= {myID} inArmor={inArmor} item={myArmour}/>
            </Container>
        )
    }
    
}

export default Armour