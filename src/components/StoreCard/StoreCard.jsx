import "./StoreCard.css";
import React from "react";
import LikesBtn from "../Likes/LikesBtn";

export default function StoreCard({ store }) {
  return (
    <div className="StoreCard">
      <div className="layer">
        <img
          className="storeImage"
          src={store.storeImg}
          height="140px"
          width="340px"
          alt="store-pic"
        />
      </div>

      <a className="storeNameA" href={`/store-details/${store._id}`}>
        {" "}
        <p className="storename"> {store.storeName}</p>{" "}
      </a>

      <div>
        <div className="tags">
          <div className="tagsorder">
            <a href={store.storeAddress} target="_blank" rel="noreferrer">
              <p className="cardadress"> See location </p>
            </a>
            <br></br>
            <a className="card-text" href={store.storePhone}>
              {" "}
              <p> Phone</p>{" "}
            </a>
            <p className="card-text">{store.deliveryTime}</p>
            <p className="card-text">{store.priceRange}</p>
          </div>

          <div className="favoritelikes">
            <LikesBtn className="card-text" store={store} />
          </div>
        </div>
      </div>
    </div>
  );
}
