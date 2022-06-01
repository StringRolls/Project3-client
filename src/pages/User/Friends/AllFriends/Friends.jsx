import { Row, Col } from "react-bootstrap"
import FriendsCard from "./FriendsCard/FriendsCard"
import Loader from "../Loader/Loader"

const Friends= ({ friends }) => {

    return (
        friends.length
            ?
            <Row>
                {
                    friends.map(friend => {
                        return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard {...friend} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default Friends;