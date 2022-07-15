import "./StoreDetails.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import StoresService from "./../../../services/store.service.js";
import Loader from "../../../components/Loader/Loader";
import LikesBtn from "../../../components/Likes/LikesBtn";
import Comments from "../../../components/Comments/Comments"
import Accordion from "react-bootstrap/Accordion";

export default function StoreDetails() {
  const [storeDetails, setStoreDetails] = useState(null);

  const { storeId } = useParams();

  useEffect(() => {
    StoresService.getStoreDetails(storeId)
      .then((response) => {
        setStoreDetails(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return storeDetails ? (
    <Container>
      <a href="/home">
        {" "}
        <img className="logo13" src="../home.png" alt="logo"></img>
      </a>
      <h1>{storeDetails.storeName}</h1>
      <hr />
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <img
            className="store-banner"
            src={storeDetails.storeImg}
            alt="store-img"
          />
          <LikesBtn store={storeDetails} />
          <p>Price range: {storeDetails.priceRange}</p>
          <p>Delivery time: {storeDetails.deliveryTime}</p>
          <a
            className="storedetails"
            href={storeDetails.storeAddress}
            target="_blank"
            rel="noreferrer"
          >
            See location
          </a>
          <br></br>
          <a className="storedetails" href={storeDetails.storePhone}>
            Phone{" "}
          </a>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Best Rated</strong>
              </Accordion.Header>
              <Accordion.Body>
                <div className="container">
                  <div className="row">
                    {storeDetails.products.map((product) => (
                      <div
                        key={product._id}
                        className="card col-6 space-btw-cards"
                      >
                        <img
                          className="card-img-top"
                          src={product.productImg}
                          alt="Card-cap"
                        ></img>
                        <div className="card-body">
                          <h5 className="card-title">{product.productName}</h5>
                          <p className="card-text">
                            {product.productDescription}
                          </p>
                        </div>

                        <div className="card-footer">
                          {product.productPrice}
                        </div>
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
                <div className="container">
                  {/* {storeDetails.comments.map((comment) => (
                    <div className="row">
                      <div className="col-2 ">
                        <img
                          src={comment.owner.userImg}
                          className="mr-3 owner-img-size"
                          alt="owner-img"
                        ></img>
                      </div>

                      <div className="col-10">
                        <h5 className="mt-0">{comment.owner.username}</h5>
                        <p className="comment">{comment.message}</p>
                      </div>
                    </div>
                  ))} */}
                  <Comments store={storeDetails} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong>Delivery options</strong>
              </Accordion.Header>
              <Accordion.Body
                dangerouslySetInnerHTML={{
                  __html: storeDetails.deliveryOptions,
                }}
                target="_blank"
              />
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  ) : (
    <Loader />
  );
}
