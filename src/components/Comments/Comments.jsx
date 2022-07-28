import "./Comments.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import StoreService from "./../../services/store.service";

export default function Comments (props) {
    const {store} = props;
    
    const [message, setMessage] = useState("");
    const [owner, setOwner] = useState("")

    const navigate = useNavigate();



    /* const handleComment = (e) =>{
        e.preventDefault();


        StoreService.saveComment(store._id)
        .then ((response) => {
            setMessage(response.data)
            setOwner(response.user._id)
            navigate(`/api/store/${store._id}`)
        })
        .catch((error) => error)
    } */

    return (
        <div>
          <form>
        <label>Comment</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
 
        <label>{owner}</label>
        <textarea
          type="text"
          name="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>

        </div>
    )
}