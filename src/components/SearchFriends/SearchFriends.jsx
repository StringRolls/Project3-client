import React from 'react';
import { Row, Col } from "react-bootstrap"
import {useState, useEffect, useContext} from 'react'
import FriendsCard from "../../components/FriendsCard/FriendsCard"
import Loader from "../Loader/Loader"
import { AuthContext } from '../../context/auth.context'
import FriendsService from "../../services/friends.service.js"

const SearchFriends= () => {
    const {user} = useContext(AuthContext)
    const [friendsData, setFriendsData] = useState(null);
    const [filteredFriends, setFilteredFriends] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        FriendsService
        .searchNewFriends()
        .then((users) => {
            setFriendsData(users)
            console.log(users)
        })
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value
        setSearch(query);
        
        if (query === "") {
            
            setFilteredFriends([]);
            
          } else {
            const newFriendsSearch = friendsData.filter((friend) =>
              friend.username.toLowerCase().includes(query.toLowerCase())
            );

            setFilteredFriends(newFriendsSearch);
        };
    };


    return (

        <div className="input-group">
            <form >
            <div className="form-outline">
                <input onChange={handleSearch} value={search} type="search" id="form1" className="form-control" />
                <label className="form-label" htmlFor="form1"></label>
            </div>
        <button type="submit" className="btn btn-primary"> Search
            <i className="fas fa-search"></i>
        </button>
        </form>
        
        {friendsData ?
          
            (filteredFriends.map(friend => {
                return (
                            <Col md={{ span: 4 }} key={friend._id}>
                                <FriendsCard friend = {friend} />
                            </Col>
                        )
            }))
           :
            <Loader />
        }
        </div>
    )
};

export default SearchFriends;




