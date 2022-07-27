import React from 'react';
import "./Favourites.css";
import axios from "axios"
import { Button} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { useContext } from "react";
import { useState } from "react";

const Favourites = (props) => {

    const [likes, setLikes] = useState(props.favoriteStores);

    function handleSubmit(){

        axios.post("/Favourites") // review once the routes are done. This route has to update the store's likes and res.json that store's updated likes.length
        .then((response) => setLikes(response.data))
        .catch((err) => console.log(err));
    }


    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <Button type = "submit"> 
                    Like 
                </Button>  
            </form>
            <p>{ likes } likes</p>
        </div> 
    );
    }

export default Favourites;