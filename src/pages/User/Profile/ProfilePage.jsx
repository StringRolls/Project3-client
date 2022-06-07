//import { useContext } from "react"
import React from 'react';
import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
//import Favourites from "./../../../components/Favourites/Favourites"
//import { AuthContext } from "../../../context/auth.context
import "./Profile.css"
import userService from "../../../services/user.service"
import {AuthContext} from "../../../context/auth.context"
import Loader from "../../../components/Loader/Loader"
import LikesBtn from "../../../components/Likes/LikesBtn"
//import uploadService from "../../../services/upload.service"


const ProfilePage = () => {

    const {user} = useContext(AuthContext)
    
    const [profile, setProfile] = useState(null)

    useEffect(() => {
      if(user) {
        userService.getOneUser(user._id)
        .then(response => {
          setProfile(response.data)
        })
        .catch(err => console.log(err));
    }
    }, [user])
    /* useEffect(() => uploadService.getUploadImage()) // bjork added 11.00 */

    return (
        <>
        {profile ?
        <Container>
           
         
         
          {/* <img src={user.userImg} alt="picture user" /> */}
          <div class="contentUser"> 
          <img className="userImage" src={profile.userImg} alt={profile.userImg} />
         
         <div className="contentEdit">
          <h5 className="userName"> {profile.username}</h5> 
          <br></br>
          
            <a href={`/profile-edit/${profile._id}`}><button class="editBtn"> edit</button></a>
            </div>
            </div>


          {/* <Favourites likes={store.favoriteStores}/>  */}
          <h3 className="title2"> Your Favourites </h3>

          <div className="container">
            <div className="row">

            <img className="storeImage" src={profile.storeImg} alt={profile.storeImg} />
            

              {/* <br></br>
              <div className="ContainerPicture">
              <img src={store.storeImg} alt=" store image "></img>

              <br></br>
                Restaurant 2
              </div>

              <br></br>
              <div className="ContainerPicture">
              <img src={store.storeImg} alt=" store image "></img>
              <br></br>
                Restaurant 3
              </div>

              <br></br>
              <div className="ContainerPicture">
              <img src={store.storeImg} alt=" store image "></img>
              <br></br>
                Restaurant 2
              </div> */}

            </div>
          </div> 

          <LikesBtn />
        </Container>
        :
        <Loader />}
        </>
    )
}



export default ProfilePage

// question mark in username