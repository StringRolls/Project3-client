import "./StoreCard.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";

const StoreCard = ({ _id, imageUrl, title, owner }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card className="StoreCard">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-grid gap-2">
          <Link to={`/store-details/${_id}`} className="btn btn-dark">
            See details
          </Link>
          {owner && owner === user?._id && (
            <Button variant="warning" onClick={() => alert("Try again")}>
              Edit
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreCard;