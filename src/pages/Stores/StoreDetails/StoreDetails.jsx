import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import StoresService from './../../../services/store.service.js'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../../components/Loader/Loader'
import LikesBtn from "../../../components/Likes/LikesBtn"




function StoreDetails() {

    const [storeDetails, setStoreDetails] = useState(null)

    const { storeId } = useParams()

    useEffect(() => {

        StoresService

            .getStoreDetails(storeId)
            .then((response) => {
                setStoreDetails(response.data)})

            .catch(err => console.log(err))

    }, [])

    return (

        storeDetails
            ?
            <Container>
                <h1>{storeDetails.storeName}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <img src={storeDetails.storeImg} alt='store-img'/>
                        <LikesBtn />
                        <a href={storeDetails.storeAddress} target='_blank'>See location</a>
                        <p>Phone: {storeDetails.storePhone}</p>
                        <p>Delivery time: {storeDetails.deliveryTime}</p>
                        <p>Price range: {storeDetails.priceRange}</p>
                        <a href={storeDetails.deliveryOptions} target='_blank'>Delivery Option</a>

                    </Col>
                    {/* <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={storeDetails.storeImg} alt={storeDetails.storeName} />
                    </Col> missing store products  */} 
                </Row>

            </Container>

            :

            <Loader />
    )
}

export default StoreDetails;
