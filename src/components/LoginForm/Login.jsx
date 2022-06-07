import React from 'react';
import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from '../../context/message.context'
import './Login.css'

const Loginform = () => {

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                showMessage('Welcome!! Find your new favourite restaurant!!')
                navigate('/home')
            })
            .catch(err => console.log("Unable to login: ", err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData



    return (

        <>
            
        <div class="background"> 
    <div> <img class="logo" src="/logo.jpg"/></div>
          

            <Form className="formLogging" onSubmit={handleSubmit}>
                <Form.Group className="login" controlId="email">
                    <Form.Label className="text1">Email</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder="email" />
                </Form.Group>

                <Form.Group className="login" controlId="password">
                    <Form.Label className="text1">Password</Form.Label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" value={password} placeholder="password" />
                </Form.Group>

                <button className="button1" type="submit">Log in</button>
            </Form>

            </div>   
        </>

    )
}

console.log("name")

export default Loginform