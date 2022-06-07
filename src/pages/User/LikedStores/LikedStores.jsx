import React from 'react';
import {useState, useEffect} from 'react'
import StoresService from "../../../services/store.service.js"
import StoreCard from "../../../components/StoreCard/StoreCard"
import Loader from "../../../components/Loader/Loader"
import { Row, Col } from "react-bootstrap"



export default function LikedStores (props){
    const [storesLiked, setStoresLiked] = useState(null);

    useEffect(() => {
        StoresService 
        .getStoresLiked(props.storeId)
        .then((res) => setStoresLiked(res))
    }, [props.storeId])



    return(
        <>
        <div>
        {storesLiked
            ?
            <Row>
                {
                    storesLiked.map(store => {
                        return (
                            <Col md={{ span: 4 }} key={storesLiked._id}>
                                <StoreCard store= {storesLiked} />
                            </Col>
                        )
                    })
                }             
            </Row>
            :
            <Loader />}
            </div>

        </>
    )
}