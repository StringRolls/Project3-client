import React from "react";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const Navigation = () => {
  const { user, logOutUser, isLoggedIn } = useContext(AuthContext);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <NavLink to={`/profile/${user._id}`} className="nav-link">
                  Profile
                </NavLink>
                <NavLink to="/friends" className="nav-link">
                  Friends
                </NavLink>

                {isLoggedIn ? (
                  <a class="logoutLink" href="/">
                    {" "}
                    <div className="nav-link" onClick={logOutUser}>
                      Logout
                    </div>
                  </a>
                ) : (
                  <>
                    <NavLink to="/signup" className="nav-link">
                      Signup
                    </NavLink>
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </>
                )}
              </>
            )}
            {!user && (
              <>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav-link">
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
