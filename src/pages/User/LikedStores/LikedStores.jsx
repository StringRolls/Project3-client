import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import StoreCard from "../../../components/StoreCard/StoreCard";
import Loader from "../../../components/Loader/Loader";
import StoresService from "../../../services/store.service.js";

export default function LikedStores(props) {
  const [storesLiked, setStoresLiked] = useState(null);

  useEffect(() => {
    StoresService.getStoresLiked(props.storeId)
      .then((res) => setStoresLiked(res))
      .catch((error) => error);
  }, [props.storeId]);

  return (
    <>
      <div>
        {storesLiked ? (
          <Row>
            {storesLiked.map((store) => {
              return (
                <Col md={{ span: 4 }} key={storesLiked._id}>
                  <StoreCard store={storesLiked} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
