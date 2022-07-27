import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import StoresService from "./../../../services/store.service.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import LikesBtn from "../../../components/Likes/LikesBtn";
import "./FilteredStores.css";
import StoreCard from "../../../components/StoreCard/StoreCard.jsx";

function FilteredStores() {
  const [filteredStores, setStoreFiltered] = useState(null);

  const { cuisineType } = useParams();

  useEffect(() => {
    StoresService.getStoresByCuisine(cuisineType)
      .then((response) => {
        setStoreFiltered(response.data);
      })

      .catch((error) => (error));
  }, []);

  return filteredStores ? (
    <Container>
      {filteredStores.map((store) => (
        <StoreCard store={store} />
      ))}
    </Container>
  ) : (
    <Loader />
  );
}

export default FilteredStores;
