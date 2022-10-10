import "./FilteredStores.css";
import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Container} from "react-bootstrap";
import StoresService from "./../../../services/store.service.js";
import Loader from "../../../components/Loader/Loader";


import StoreCard from "../../../components/StoreCard/StoreCard.jsx";

export default function FilteredStores() {
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
      <a href="/home"> <img className="logo13" src="../home.png" alt="logo"></img></a>
      {filteredStores.map((store) => (
        <StoreCard store={store} />
      ))}
    </Container>
  ) : (
    <Loader />
  );
}

