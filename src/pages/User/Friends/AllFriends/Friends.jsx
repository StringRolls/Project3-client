import React from 'react';
import { Row, Col } from "react-bootstrap"
import {useState, useEffect} from 'react'
import FriendsCard from "../../../../components/FriendsCard/FriendsCard"
import Loader from "../../../../components/Loader/Loader"
import FriendsService from "./../../../../services/friends.service.js"
import SearchFriends from "../../../../components/SearchFriends/SearchFriends"


const Friends= () => {

    const [friends, setFriends] = useState(null);
    const [following, setFollowing] = useState (null)

    useEffect(() => {
        FriendsService
        .getAllFriends()
        .then((apiFriends) => {
            console.log(apiFriends.data)
            setFriends(apiFriends.data)
        })
    }, [])

    useEffect(() => {
        FriendsService
        .getAllFriends()
        .then((apiFriends) => {
            console.log(apiFriends.data)
            setFriends(apiFriends.data)
        })
    }, [following])


    function addFriends(newFriend) {
        setFriends([...friends, newFriend])
    }


    return (
        <>
        <div>
            <SearchFriends />
        </div>
        <div>
        {friends
            ?
            <Row>
                {
                    friends.map(friend => {
                        return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard friend = {friend} addFriends={addFriends} setFollowing= {setFollowing}/>
                            </Col>
                        )
                    })
                }             
            </Row>
            :
            <Loader />}
<div>
<a href="/home"> <button> go back  </button></a>
</div>
            </div>
           
            </>
    )
}

export default Friends





