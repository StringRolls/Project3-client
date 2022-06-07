import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "../components/Splash/Splash";
import Homepage from "./../pages/HomePage/HomePage"
import LoginPage from "./../pages/LoginPage/LoginPage"
import SignupPage from "./../pages/SignUpPage/SignUp"
import ProfilePage from "../pages/User/Profile/ProfilePage";
import ProfileEdit from "../pages/User/ProfileEdit/ProfileEdit";
import Friends from "../pages/User/Friends/AllFriends/Friends";
//import SearchFriends from "../components/SearchFriends/SearchFriends";
import StoreDetails from "../pages/Stores/StoreDetails/StoreDetails";
import FilteredStores from "../pages/Stores/FilteredStores/FilteredStores";
import LikedStores from "../pages/User/LikedStores/LikedStores"

//import PrivateRoute from "./PrivateRoute"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/liked-stores" element={<LikedStores />} />

      {/* <Route path="/search-friends" element={<SearchFriends />} /> */}
      <Route path="/filtered-stores" element ={<FilteredStores/>}/>
    
      <Route path="/profile/:id" element={<ProfilePage />}/>
        <Route path="/profile-edit/:id" element={<ProfileEdit />}>
      </Route>

      <Route path="/store-details/:storeId" element={<StoreDetails />} />

      <Route path="*" element={<h1>Oops!! There was en error</h1>} />
    </Routes>
  );
};

export default AppRoutes;
