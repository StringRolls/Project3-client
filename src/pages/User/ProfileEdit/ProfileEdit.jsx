import React from 'react';
import "./ProfileEdit.css"
import { useState, useContext, useEffect} from "react"
import { Form } from "react-bootstrap"
import userService from "../../../services/user.service"
import uploadService from "../../../services/upload.service"
import { useNavigate, useParams } from "react-router-dom";
import {AuthContext} from "../../../context/auth.context"



const ProfileEdit = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const {id} = useParams()

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
        userService
            .saveUser(user._id, profileData)
            .then(response => {
                navigate(`/profile/${profileData._id}`)       
            })
            .catch(error => (error))
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
            .catch(error => (error))
    }

  
    return (

    


        <div className="background2">
         <a href="/home"><img class="logo6" src="/logo.jpg" /> </a>  
        <form onSubmit={handleSubmit}>
            <div className="name" controlId="name">
                <label className="text2">Name</label>
                <br></br>
                <input type="text" value={profileData.username} onChange={handleInputChange} name="username" />
            </div>

            <div className="tagline" controlId="description">
                <label className="text2">Tagline</label>
                <br></br>
                <input as="textarea" value={profileData.tagLine} rows={2} onChange={handleInputChange} name="tagLine" />
  
            </div>

            <div className="email" controlId="length">
                <label className="text2">email</label>
                <br></br>
                <input type="email" value={profileData.email} onChange={handleInputChange} name="email" />
            </div>

           
            <div class="profilepicture" controlId="imageUrl">
                <label className="text2"> profile picture</label>
                <br></br>
                <input class="inputPicture" type="file" onChange= {handleImageUpload} />
            </div> 

            <button class="button2" type="submit"> Confirm </button>
        </form>
        </div>

    )
}
 
export default ProfileEdit


