import { React, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Profile.css";
import userService from "../../../services/user.service";
import Loader from "../../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import StoreCard from "../../../components/StoreCard/StoreCard"

const ProfilePage = () => {
  const { id } = useParams();
  
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    userService
      .getOneUser(id)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => error);
  }, []);
 
  return (
    <>
      {profile ? (
        <Container>
          <div class="contentUser">
            <img
              className="userImage"
              src={profile.userImg}
              alt={profile.userImg}
            />

            <div className="contentEdit">
              <h5 className="userName"> {profile.username}</h5>
              <br></br>

              <div className="contentEdit">
                <p className="userName"> {profile.tagLine}</p>
                <br></br>

                <a href={`/profile-edit/${profile._id}`}>
                  <button class="editBtn"> edit</button>
                </a>
              </div>
            </div>
            <h3 className="title2"> Your Favourites </h3>

            <div className="container">
              <div className="row">
              {profile.favoriteStores.map((store, idx) => <StoreCard key={idx} store={store}/>)}
               {/*  <img
                  className="storeImage"
                  src={profile.storeImg}
                  alt={profile.storeImg}
                /> */}
              </div>
            </div>

            <a href="/home">
              {" "}
              <button> go back </button>
            </a>
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfilePage;
