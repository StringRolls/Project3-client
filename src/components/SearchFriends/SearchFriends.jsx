import "./SearchFriends.css";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Col } from "react-bootstrap";

import FriendsCard from "../../components/FriendsCard/FriendsCard";
import LoginPage from "../../pages/LoginPage/LoginPage";
import FriendsService from "../../services/friends.service.js";
import Loader from "../Loader/Loader";

export default function SearchFriends(props) {
  const { search, setSearch, addFriends, setFollowing } = props;
  const [friendsData, setFriendsData] = useState(null);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const { isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    FriendsService.searchNewFriends()
      .then((users) => setFriendsData(users))
      .catch((error) => error);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query === "") {
      setFilteredFriends([]);
    } else {
      const newFriendsSearch = friendsData.filter((friend) =>
        friend.username.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredFriends(newFriendsSearch);
    }
  };

  const deleteSearch = (e) => {
    setFilteredFriends([]);
  };

  return (
    <>
      {isLoggedIn && (
        <div>
          <form>
            <div className="formline">
              <div className="wrapper">
                <input
                  onChange={handleSearch}
                  value={search}
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
                <button className="button5" type="submit">
                  Search
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <label className="form-label" htmlFor="form1"></label>
          </form>

          {friendsData ? (
            filteredFriends.map((friend) => {
              return (
                <Col md={{ span: 4 }} key={friend._id}>
                  <FriendsCard
                    search={search}
                    setSearch={setSearch}
                    friend={friend}
                    addFriends={addFriends}
                    setFollowing={setFollowing}
                    deleteSearch={deleteSearch}
                  />
                </Col>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      )}
      {!isLoggedIn && (
        <>
          <LoginPage />
        </>
      )}
    </>
  );
}
