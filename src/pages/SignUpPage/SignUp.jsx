import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/Signup'

const SignupPage = () => {

    return (
        <Container>
            <Row>
              
                    
                    <SignupForm />

            </Row>
        </Container>
    )
}

export default SignupPage