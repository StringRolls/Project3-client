import React from "react";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { MessageContext } from "../../context/message.context";
import "./Signup.css"

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const { showMessage } = useContext(MessageContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .signup(signupData)
      .then(({ data }) => {
        storeToken(data.authToken);
        authenticateUser();
        showMessage("Welcome!! Find your new favourite restaurant!!");
        navigate("/home");
      })
      .catch((error) =>(error));
  };

  const handleInputChange = (e) => {
    const { value, name } = e.currentTarget;
    setSignupData({ ...signupData, [name]: value });
  };

  const { username, password, email } = signupData;

  return (
    <>
      <div class="back">
        <div>
          {" "}
         <a href="/"><img class="logo1" src="/logo.jpg" /></a> 
        </div>

        <form className="formLogging" onSubmit={handleSubmit}>
          <div className="mb-3" controlId="username">
            <label className="text1">Username</label>
            <br></br>
            <input
              type="text"
              onChange={handleInputChange}
              name="username"
              placeholder="  username"
              value={username}
            />
          </div>

          <div className="mb-3" controlId="email">
            <label className="text1">Email</label>
            <br></br>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="  email"
              value={email}
            />
          </div>

          <div className="mb-3" controlId="password">
            <label className="text1">Password</label>
            <br></br>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              placeholder="  password"
              value={password}
            />
          </div>

          <button className="button2" variant="dark" type="submit">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
