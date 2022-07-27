import { Button, Form } from "react-bootstrap";
import { React, useContext, useState, useEffect } from "react";
import FriendService from "./../../services/friends.service";

export default function FollowBtn({ friend, addFriends, setFollowing }) {
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    FriendService.checkIfFollowing(friend._id)
      .then((response) => {
        if (response.data === false) setIsFollowing(false);
        else setIsFollowing(true);
      })
      .catch((error) => error);
  }, []);

  const handleFollow = (e) => {
    e.preventDefault();

    FriendService.followFriend(friend._id)
      .then(() => {
        setIsFollowing(true);
        setFollowing(true);
        addFriends(friend);
      })
      .catch((error) => console.log(error));
  };

  const handleUnfollow = (e) => {
    e.preventDefault();

    FriendService.unfollowFriend(friend._id)
      .then(() => {
        setIsFollowing(false);
        setFollowing(false);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      {isFollowing ? (
        <Form onSubmit={handleUnfollow}>
          <Button variant="dark" type="submit" className="friendsBtn">
            Unfollow
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleFollow}>
          <Button variant="dark" type="submit" className="friendsBtn">
            Follow
          </Button>
        </Form>
      )}
    </>
  );
}
