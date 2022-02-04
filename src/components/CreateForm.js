import React from 'react';
import {useState, useEffect} from 'react';
import { InputGroup, Button, ButtonGroup, InputGroupText, Input, Container } from 'reactstrap';

const CreateForm = () => {
    const initItemState = {
        name: "",
        description: "",
        image: ""
    }
    const initFormState = {
        queryType: "",
    }
    const [formState, setFormState] = useState(initFormState);
    const [itemState, setItemState] = useState(initItemState);
    //Handle submit function
    const handleSubmit = async (event) => {
        event.preventDefault();
        //take input value from handle change = true 
        //await setForm State query type value
        //await querytype value then 
        //send post request
        switch(formState.queryType){
            case "weapon":
                console.log("in weapon case");
                fetch("http://localhost:8000/weapons",{
                    method: "POST",
                    body: itemState
                }).then(response => response.json());
                break;
            case "armour":
                console.log("in armour case");
                fetch("http://localhost:8000/armour", {
                    method: "POST",
                    body: itemState
                }).then(response => response.json());
                break;

            default:
                console.log("default case do nothing");
        }

        setFormState(initFormState);
        setItemState(initItemState);
    }

    //Handle change function
    // take name value on change
    // take image url on change 
    //take description on change 
      //set the state of item state to current values of all three forms 
    const handleChange = (event) => {
        event.preventDefault()
        setItemState({...itemState, [event.target.id]: event.target.value});
        console.log(itemState)
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
                <Button value= {handleChange} onClick={handleSubmit} className='submit-buttons'>Add a Weapon</Button>
                <Button value= {handleChange} onClick={handleSubmit} className='submit-buttons'>Add Armour</Button>
            </ButtonGroup>
        </Container>
    )
}

export default CreateForm;