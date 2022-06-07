import React from "react";
import "./LikesBtn.css";
import axios from "axios"
import { Button} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { useContext } from "react";
import { useState } from "react";
import  { Component } from "react";

class LikesBtn extends Component {
  state = {
    count: 0,
  };
  
  handleOnChange = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="div-btn">
         <button class="heartbutton" onClick={this.handleOnChange}><div>  <img src="https://pngroyale.com/wp-content/uploads/2021/11/Download-emoji-heart-.png" width={20} /> {this.state.count}</div> </button>
       
      </div>
    );
  }
}

export default LikesBtn;



