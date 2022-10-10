import "./Profile.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../../context/auth.context.js";
import Loader from "../../../components/Loader/Loader";
import StoreCard from "../../../components/StoreCard/StoreCard";
import userService from "../../../services/user.service";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isUser, setIsUser] = useState(null);
  const { isLoggedIn, user } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    userService
      .getOneUser(id)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => error);
  }, [id]);

  useEffect(() => {
    if (profile && user) {
      if (profile._id === user._id) setIsUser(true);
    }
  }, [profile]);

  return (
    <>
      {isLoggedIn &&
        (profile ? (
          <Container>
            <div className="contentUser">
              <img
                className="userImage"
                src={profile.userImg}
                alt={profile.userImg}
              />

              <a href="/home">
                {" "}
                <img className="logo12" src="../home.png" alt="home-logo" />
              </a>

              <div className="contentEdit">
                <h5 className="userName"> {profile.username}</h5>
                <br></br>

                <div className="contentEdit">
                  <p className="userName1"> {profile.tagLine}</p>
                  <br></br>

                  {isUser && (
                    <a href={`/profile-edit/${profile._id}`}>
                      <button className="editBtn"> edit</button>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="title2"> Your Favourites </h3>

              <div className="container">
                <div className="row">
                  {profile.favoriteStores.map((store, idx) => (
                    <StoreCard key={idx} store={store} />
                  ))}
                </div>
              </div>

              <a href="/home">
                {" "}
                <a href="/home" className="button10">
                  {" "}
                  <img
                    src="https://flyclipart.com/thumb2/arrow-to-the-left-arrow-png-icon-free-download-510843.png"
                    width={15}
                    height={15}
                    alt="logo"
                  />{" "}
                </a>
              </a>
            </div>
          </Container>
        ) : (
          <Loader />
        ))}
      {!isLoggedIn && (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
