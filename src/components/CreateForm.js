import React from 'react';
import {useState, useEffect} from 'react';
import { InputGroup, Button, ButtonGroup, InputGroupText, Input, Container } from 'reactstrap';

const CreateForm = () => {
    const initItemState = {
        name: null,
        description: null,
        image: null
    }
    const initFormState = {
        queryType: "",
    }
    const [formState, setFormState] = useState(initFormState);
    const [itemState, setItemState] = useState(initItemState);
    //Handle submit function
    const handleSubmit = (event) => {
        event.preventDefault();

        //send post request
        switch(formState.queryType){
            case "weapon":
                console.log("in weapon case");
                fetch("http://localhost:8000/weap")
                break;
            case "armour":
                console.log("in armour case");

                break;

            default:
                console.log("default case do nothing");
        }

        setFormState(initFormState);
    }
    //Handle change function

    return(
        <Container>
            <InputGroup>
                <InputGroupText >Name</InputGroupText>
                <Input placeholder="Name of thing" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Image URL</InputGroupText>
                <Input placeholder="url" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Description</InputGroupText>
                <Input type="textarea" placeholder="Your Text" />
            </InputGroup>
            <br />
            <ButtonGroup className='finalize-form'>
                <Button className='submit-buttons'>Add a Weapon</Button>
                <Button className='submit-buttons'>Add Armour</Button>
            </ButtonGroup>
        </Container>
    )
}

export default CreateForm;