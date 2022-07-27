import React from "react";
import "./StoreCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/auth.context";
import LikesBtn from "../Likes/LikesBtn"

const StoreCard = ({ store }) => {
  //const { user } = useContext(AuthContext);
   console.log('STORE!!', store)
  return (
    <Card className="StoreCard">
      <Card.Img variant="top" src={store.storeImg} />
      <Card.Body>
        <Card.Title>{store.storeName}</Card.Title>
        <div className="d-grid gap-2">
          <Link to={`/store-details/${store._id}`} className="btn btn-dark">
            See details
          </Link>
          <p class="card-text">{store.storeAddress}</p>
          <p class="card-text">{store.storePhone}</p>
          <p class="card-text">{store.deliveryTime}</p>
          <p class="card-text">{store.priceRange}</p>
          <p class="card-text">{store.storeLikes}</p>
          <LikesBtn store={store}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreCard;