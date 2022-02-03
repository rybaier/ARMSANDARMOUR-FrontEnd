import React from 'react'

import { useParams } from 'react-router-dom';
import { Card, CardTitle, CardText, Container, Col, Row, CardImg} from 'reactstrap'

const Weapon = ({weapons}) =>{
    const myID = useParams();
    console.log(myID);
    return (
        <Container>
            <h2> Weapon component</h2>
            {/* <Card className='weapon-card'key={}>
                <CardImg alt="weapon-image" src= {}  top width="20%" />
                <CardTitle tag= {"h3"}>{}</CardTitle>
                <CardText> {} </CardText>
            </Card> */}
        </Container>
    )
}

export default Weapon