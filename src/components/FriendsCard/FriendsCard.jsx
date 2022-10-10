import "./FriendsCardStyle.css";
import React from "react";
import FollowBtn from "../FollowBtn/FollowBtn";

export default function FriendsCard(props) {
  const {
    friend,
    addFriends,
    setFollowing,
    search,
    setSearch,
    deleteSearch,
    deleteFriends,
  } = props;

  return (
    <div className="friendsCard">
      <img className="imagefriends" src={friend.userImg} alt="friends-pic" />
      <div>
        <a className="textA" href={`/profile/${friend._id}`}>
          <h4 className="textA">{friend.username}</h4>
        </a>

        <div className="friendTagline">
          <p> {friend.tagLine}..</p>
        </div>

        <div className="buttonFollow">
          <FollowBtn
            search={search}
            setSearch={setSearch}
            friend={friend}
            addFriends={addFriends}
            setFollowing={setFollowing}
            deleteSearch={deleteSearch}
            deleteFriends={deleteFriends}
          />
        </div>
      </div>
    </div>
  );
}
