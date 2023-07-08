import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import Input from '../../componentes/UI/Input/Input';

function LoginFm(props) {
    const handleSubmit = () => {
        console.log("submitt");

        localStorage.setItem("logintest", "true")
        Navigate('/')
    }
    return (
        <div>
            
                <Form onSubmit={handleSubmit} style={{width:'200px',height:'150px',border:'1px solid black'}}>
                <FormGroup>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </FormGroup>
                {' '}
                <Button type='submit'>
                    Submit
                </Button>
            </Form>

            
        </div>

       
        
    );
}

export default LoginFm;