import React from 'react';
import { Container } from "react-bootstrap"
import "./ProfileEdit.css"
import { useState, useContext} from "react"
import { Form, Button } from "react-bootstrap"
import userService from "../../../services/user.service"
import uploadService from "../../../services/upload.service"
import { useNavigate, useParams } from "react-router-dom";
import {AuthContext} from "../../../context/auth.context"
import { useEffect } from 'react';


const ProfileEdit = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const {id} = useParams()

    console.log("this is user", user)

    const [profileData, setProfileData] = useState({
        user: id,
        username: '',
        tagLine: '',
        email: '',
        userImg: ''
    })

    useEffect(() => {
        userService
        .getOneUser(id)
        .then((userDB) => {
            console.log('USER DB',userDB.data)
            setProfileData(userDB.data)
        })
    }, []);

    const [loadingImage, setLoadingImage] = useState(false)

    const { username, tagLine, email, userImg } = profileData

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setProfileData({
            ...profileData,
            [name]: value              
        })
    }

    const handleSubmit = e => {

        e.preventDefault()
        console.log("This is profile data", profileData)
        //debugger
        userService
            .saveUser(user._id, profileData)
            .then(response => {
                console.log("This is the response",response)
                navigate(`/profile/${profileData._id}`)       
            })
            .catch(err => console.log(err))
    }

 const handleImageUpload = (e) => {
        e.preventDefault();
        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfileData({ ...profileData, userImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

  
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Tagline</Form.Label>
                <Form.Control as="textarea" rows={2} onChange={handleInputChange} name="tagLine" />
  
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label> profile picture</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group> 

            <button type="submit"> Confirm </button>
        </Form>

    )
}
 
export default ProfileEdit


