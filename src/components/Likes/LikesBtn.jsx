import "./LikesBtn.css";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context.js";
import StoresService from "../../services/store.service.js";

export default function LikesBtn({ store }) {
  const [likes, setLikes] = useState(null);
  const { user } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikes(store.storeLikes);
  }, []);

  const handleOnChange = (event) => {
    event.preventDefault();
    const userID = user?._id;
    const includesUser = likes.map(({ _id }) => _id).includes(userID);
    setIsLiked(includesUser);
    if (!isLiked) {
      StoresService.getStoresLiked(store._id).then((response) => {
        setLikes(response.data);
      });
    }
  };

  return (
    <>
      <div>
        <button className="heartbutton" onClick={handleOnChange}>
          <div>
            <img
              className="heartbutton1"
              src="../heart.png"
              alt="like button"
            />
          </div>
          <p className="likes">{likes?.length} Likes </p>
        </button>
      </div>
    </>
  );
}
