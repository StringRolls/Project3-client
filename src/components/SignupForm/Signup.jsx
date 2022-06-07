import React from 'react';
import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from '../../context/message.context'

const Signup = () => {
    

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                showMessage('Welcome!! Find your new favourite restaurant!!')
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { username, password, email } = signupData

    return (

        <>
            
        <div class="background"> 
    <div> <img class="logo" src="/logo.jpg"/></div>

        <Form className="formLogging" onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label className="text1">Username</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="username" placeholder="username" value={username} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text1">Email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" placeholder="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label className="text1">Password</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" placeholder="password" value={password} />
            </Form.Group>

            <button className="button1"  variant="dark" type="submit">Signup</button>
        </Form>

        </div>   
        </>

    )
}

export default Signup