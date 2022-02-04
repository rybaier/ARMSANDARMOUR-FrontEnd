import React from 'react';
import {useState, useEffect} from 'react';
import { InputGroup, Button, ButtonGroup, InputGroupText, Input, Container } from 'reactstrap';

const CreateForm = () => {
    const initItemState = {
        name: "",
        description: "",
        image: ""
    }
    // const initFormState = {
    //     queryType: "",
    // }
    // const [formState, setFormState] = useState(initFormState);
    // let queryType = {
    //     weapon : "weapon",
    //     armour : "armour"
    // };
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
            case "weapon":
                console.log("in weapon case");
                console.log(itemState)
                fetch("http://localhost:8000/weapons",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(itemState)
                }).then(response => response.json())
                .then(itemState => {
                    console.log('Success:', itemState);
                });
                break;
            case "armour":
                console.log("in armour case");
                fetch("http://localhost:8000/armours", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(itemState)
                }).then(response => response.json())
                .then(itemState => {
                    console.log('Success:', itemState);
                });
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
                <Button type="submit" value= {"weapon"} onClick={(event) => {queryType = "weapon"; handleSubmit(event)}} className='submit-buttons'>Add a Weapon</Button>
                <Button type="submit" value= {"armour"} onClick={(event) => {queryType = "armour"; handleSubmit(event)}} className='submit-buttons'>Add Armour</Button>
            </ButtonGroup>
        </Container>
    )
}

export default CreateForm;