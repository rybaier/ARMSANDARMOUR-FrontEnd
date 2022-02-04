import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardTitle, CardText, Container, Col, Row, CardImg} from 'reactstrap'
import CreateForm from './CreateForm';

const Weapon = () =>{
    const myID = useParams();
    const [myWeapon, setMyWeapon] = useState(null);
  
    console.log(myID);
    useEffect(()=> {
        fetch(`http://localhost:8000/weapons/${myID.id}`)
        .then(res => res.json())
        .then(json => setMyWeapon(json))
        .catch(console.error)
    }, []);
    console.log(myWeapon);
    if (myWeapon === null){
        return <h1> Loading Armour Page</h1>
    } else {
    return (
        <Container>
            <div className='weapon-page'>
                <CardTitle tag= {"h1"}>{myWeapon.name}</CardTitle>
                <CardImg className='pageimage' alt="weapon-image" src= {myWeapon.image} />
                <CardText tag={'p'}> {myWeapon.description} </CardText>
                {/* update form */}
            </div>
            <CreateForm myID={myID} inArmor={false} item={myWeapon}/>
        </Container>
    )
    }
}

export default Weapon