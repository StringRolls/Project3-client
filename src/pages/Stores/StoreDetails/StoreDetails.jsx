import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import StoresService from "./../../../services/store.service.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import LikesBtn from "../../../components/Likes/LikesBtn";
import "./StoreDetails.css";
import Accordion from "react-bootstrap/Accordion";

function StoreDetails() {
  const [storeDetails, setStoreDetails] = useState(null);

  const { storeId } = useParams();

  useEffect(() => {
    StoresService.getStoreDetails(storeId)
      .then((response) => {
        setStoreDetails(response.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return storeDetails ? (
    <Container>
      <h1>{storeDetails.storeName}</h1>
      <hr />
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <img
            className="store-banner"
            src={storeDetails.storeImg}
            alt="store-img"
          />
          <LikesBtn store={storeDetails}/>
          <p>Price range: {storeDetails.priceRange}</p>
          <p>Delivery time: {storeDetails.deliveryTime}</p>
          <a href={storeDetails.storeAddress} target="_blank">
            See location
          </a>
          <br></br>
          <a href={storeDetails.storePhone}>Phone </a>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Menu</strong>
              </Accordion.Header>
              <Accordion.Body>
                <div class="container">
                  <div class="row">
                    {storeDetails.products.map((product) => (
                      <div key={product._id} class="card col-6 space-btw-cards">
                        <img
                          className="card-img-top"
                          src={product.productImg}
                          alt="Card image cap"
                        ></img>
                        <div className="card-body">
                          <h5 class="card-title">{product.productName}</h5>
                          <p className="card-text">
                            {product.productDescription}
                          </p>
                        </div>

                        <div class="card-footer">{product.productPrice}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Comments</strong>
              </Accordion.Header>
              <Accordion.Body>
                <div class="container">
                  {storeDetails.comments.map((comment) => (
                    <div class="row">
                      <div class="col-2 ">
                        <img
                          src={comment.owner.userImg}
                          className="mr-3 owner-img-size"
                          alt="owner-img"
                        ></img>
                      </div>

                      <div class="col-10">
                        <h5 class="mt-0">{comment.owner.username}</h5>
                        <p class="comment">{comment.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Delivery options</strong>
              </Accordion.Header>
              <Accordion.Body dangerouslySetInnerHTML={{__html: storeDetails.deliveryOptions}} />
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  ) : (
    <Loader />
  );
}

export default StoreDetails;
