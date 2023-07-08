import React from 'react';

function loginform(props) {
    return (
        <div>
             <Form onSubmit={handleSubmit}>
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

export default loginform;