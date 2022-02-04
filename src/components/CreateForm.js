import React from 'react';
import {useState, useEffect} from 'react';
import { InputGroup, Button, ButtonGroup, InputGroupText, Input, Container, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const CreateForm = ({myID, inArmour, item}) => {
    let navigate = useNavigate();

    const initItemState = {
        name: item.name,
        description: item.description,
        image: item.image
    }
    
    let queryType= "";
    const [itemState, setItemState] = useState(initItemState);
    //Handle submit function
    const handleSubmit = async (event) => {
        event.preventDefault();
        //take input value from handle change = true 
        //await setForm State query type value
        //await querytype value then 
        //send post request
        // setFormState({queryType: event.target.value});
        console.log(event);
        console.log(queryType);
        switch(queryType){
            case "update":
                console.log("in update case");
                console.log(itemState)
                // console.log(JSON.stringify(itemState));
                if(inArmour){
                    fetch(`http://localhost:8000/armours/${myID.id}`,{
                        method: "PUT",

                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify(itemState)
                    }).then(response => response.json())
                    .then(itemState => {
                        console.log('Success:', itemState);
                    })
                    .then(() => {navigate("/")})
                    .catch(console.err);
                } else {
                    fetch(`http://localhost:8000/weapons/${myID.id}`,{
                        method: "PUT",

                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify(itemState)
                    }).then(response => response.json())
                    .then(itemState => {
                        console.log('Success:', itemState);
                   
                    })
                    .then(() => {navigate("/")})
                    .catch(console.err);
                }
                    
                
                break;
                case "delete":
                    console.log("in delete case");
                    console.log(itemState)
                    if(inArmour) {
                        fetch(`http://localhost:8000/armours/${myID.id}`,{
                            method: "DELETE",
    
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                        })
                        .then(() => {navigate("/")})
                        .catch(console.err);

                    } else {
                        fetch(`http://localhost:8000/weapons/${myID.id}`,{
                            method: "DELETE",
    
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                        })
                        .then(() => {navigate("/")})
                        .catch(console.err);
                    }   
                    
                    break;
                       

            default:
                console.log("default case do nothing");
        }  
    }

    //Handle change function
    // take name value on change
    // take image url on change 
    //take description on change 
      //set the state of item state to current values of all three forms 
    const handleChange = (event) => {
        event.preventDefault()
        setItemState({ ...itemState, [event.target.id]: event.target.value,});
        console.log(itemState);
    }

    //if there's an id, make new layout here with the update button
    //else do the layout we have right now
    return(
        <Container>
            <InputGroup>
                <InputGroupText >Name</InputGroupText>
                <Input id="name" onChange={handleChange} value={itemState.name} placeholder="Name of thing" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Image URL</InputGroupText>
                <Input id="image" onChange={handleChange} value={itemState.image} placeholder="url" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Description</InputGroupText>
                <Input id="description" onChange={handleChange} value={itemState.description} type="textarea" placeholder="Your Text" />
            </InputGroup>
            <br />
            <ButtonGroup className='finalize-form'>
                <Button type="submit" value= {"update"} onClick={(event) => {queryType = "update"; handleSubmit(event)}} className='submit-buttons'>Update</Button> 
                <Button type="submit" value= {"delete"} onClick={(event) => {queryType = "delete"; handleSubmit(event)}} className='submit-buttons'>Delete</Button> 
            </ButtonGroup>
        </Container>
    )
    
}

export default CreateForm;