import "./Splash.css";
import React from "react";

export default function Splash() {
  return (
    <>
      <img className="logo" src="../../../logo.jpg" />
      <br></br>

      <div className="splashColumn">
        <img className="splash" src="/food.png" width={200} height={500}></img>

        <div className="splashTags">
          <h2 className="tag1">
            {" "}
            Sharelicious <hr className="linetag" />
          </h2>
          <div className="splashcolor">
            <h4 className="tag2"> CONNECT </h4>
            <p>
              {" "}
              this is the best way to connect and always find a great place to
              order food from.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="splashColumn1">
          <img className="splash3" src="./cheese.png" width={300} height={300} alt="cheese-board"></img>
        <div className="splashTags1">
          <h4 className="tag5"> RECOMMEND </h4>
          <p>
            {" "}
            Get your best recommendations from your friends. Go to your friends
            page and see their favourites{" "}
          </p>
        </div>
        {/* <img className="splash1" src="/chinese1.png" width={200} height={500} alt="chinese-food"></img> */}
        
      </div>
     

      <div className="splashTags2">
        <h4 className="tag6"> SHARE </h4>
        <p>
          {" "}
          The favourite activity is to eat together.<br></br> What better way to
          share and connect.{" "}
        </p>
        <img className="splashpeople" src="./people.png" width={300} height={300} alt="people-sharing-food"/>
      </div>
      <div  className="splashpeople">
      
      </div>
    </>
  );
};

