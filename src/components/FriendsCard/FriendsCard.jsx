
//const User = require("./../models/user.model");
import FriendsCardStyle from "./FriendsCardStyle.css";
import { Card, Button, Form } from "react-bootstrap";
import {Link } from 'react-router-dom'
import { React, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context.js";
import FriendService from "../../services/friends.service.js";
import FollowBtn from "../FollowBtn/FollowBtn";

const FriendsCard = ({ friend }) => {


 /*  useEffect(() => {
    FriendService.followFriend(user);
    setIsFollowing(false);
  }, []); */

 

  const { user } = useContext(AuthContext)
   
  return (
    <Card className="friendsCard">
      <Card.Img variant="top" src={friend.userImg} />
      <Card.Body>
        <a href={`/profile/${friend._id}`}><Card.Title>{friend.username}</Card.Title></a>

        <div className="d-grid gap-2">
          <FollowBtn friend={friend}/>
          
        </div>
      </Card.Body>
    </Card>
  );
};

export default FriendsCard;
