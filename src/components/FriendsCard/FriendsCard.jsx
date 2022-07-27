import FriendsCardStyle from "./FriendsCardStyle.css";
import { Card } from "react-bootstrap";
import { React, useContext,} from "react";
import { AuthContext } from "../../context/auth.context.js";
import FollowBtn from "../FollowBtn/FollowBtn";

const FriendsCard = ({ friend, addFriends, setFollowing }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card className="friendsCard">
      <Card.Img variant="top" src={friend.userImg} />
      <Card.Body>
        <a href={`/profile/${friend._id}`}>
          <Card.Title>{friend.username}</Card.Title>
        </a>

        <div className="d-grid gap-2">
          <FollowBtn
            friend={friend}
            addFriends={addFriends}
            setFollowing={setFollowing}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default FriendsCard;
