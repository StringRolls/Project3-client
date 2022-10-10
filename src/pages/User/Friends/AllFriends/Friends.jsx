import "./Friends.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/auth.context.js";

import FriendsCard from "../../../../components/FriendsCard/FriendsCard";
import SearchFriends from "../../../../components/SearchFriends/SearchFriends";
import LoginPage from "../../../LoginPage/LoginPage";
import Loader from "../../../../components/Loader/Loader";
import FriendsService from "./../../../../services/friends.service.js";

export default function Friends() {
  const [friends, setFriends] = useState(null);
  const [following, setFollowing] = useState(null);
  const [search, setSearch] = useState("");
  const { isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    FriendsService.getAllFriends()
      .then((apiFriends) => {
        setFriends(apiFriends.data);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    FriendsService.getAllFriends()
      .then((apiFriends) => {
        setFriends(apiFriends.data);
      })
      .catch((error) => error);
  }, [following]);

  function addFriends(newFriend) {
    setFriends([...friends, newFriend]);
  }

  function deleteFriends(newFriend) {
    const newFriends = friends.filter((friend) => friend._id !== newFriend);
    setFriends([...newFriends]);
  }

  return (
    <>
      <div>
        <a href="/home">
          {" "}
          <img className="logo13" src="/home.png" alt="logo" />{" "}
        </a>
      </div>
      {isLoggedIn && (
        <>
          <div className="Friends">
            <SearchFriends
              search={search}
              setSearch={setSearch}
              addFriends={addFriends}
              setFollowing={setFollowing}
              deleteFriends={deleteFriends}
            />
          </div>
          <div>
            {friends ? (
              <div className="friendsCardWrapper">
                {friends.map((friend) => {
                  return (
                    { following } && (
                      <div key={friend._id}>
                        <FriendsCard
                          search={search}
                          setSearch={setSearch}
                          friend={friend}
                          addFriends={addFriends}
                          setFollowing={setFollowing}
                          deleteFriends={deleteFriends}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            ) : (
              <Loader />
            )}

            <div>
              <br></br>
              <a href="/home" className="button9">
                {" "}
                <img
                  src="https://flyclipart.com/thumb2/arrow-to-the-left-arrow-png-icon-free-download-510843.png"
                  width={15}
                  height={15}
                  alt="home-logo"
                />{" "}
              </a>
            </div>
          </div>
        </>
      )}
      <>
        {!isLoggedIn && (
          <>
            <LoginPage />
          </>
        )}
      </>
    </>
  );
}
