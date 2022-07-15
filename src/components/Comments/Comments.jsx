import "./Comments.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import StoreService from "./../../services/store.service";

export default function Comments (props) {
    const {store} = props;
    
    const [comment, setComment] = useState([]);
    const navigate = useNavigate();



    const handleComment = (e) =>{
        e.preventDefault();

        StoreService.saveComment(store._id)
        .then ((response) => {
            setComment(response.data)
            navigate(`/api/store/${store._id}`)
        })
        .catch((error) => error)
    }

    return (
        <div>
         <Form onSubmit={handleComment}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave your comment here</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button type="submit">Post</Button>
      </Form.Group>
        </Form>

        </div>
    )
}