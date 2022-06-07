import React from 'react';
import './Splash.css'




const Splash = () => {
    return (
        <>
    {/*  logo & column 1   */} 
       <img class="logo" src="../../../logo.jpg"/>
       <br></br>

       <div class="splashColumn" >
    <img class="splash" src="/food.png" width={200} height={500}></img>
   
<div class="splashTags">
<h2 class="tag1"> Sharelicious  <hr class="linetag" /></h2>
<div class="splashcolor">
    <h4 class="tag2"> CONNECT </h4>
    <p> this is the beset way to connect and always find a great place to order from. </p>
    </div>
    </div>
    </div>

  {/*   column 2  */}

    <div class="splashColumn1" >
    <div  class="splashTags1"> 
    <h4 class="tag5">  RECOMMEND </h4>
      <p> Get your beset recommendations from your friends. Go to your friends page and see their favourites </p>
      </div>
    <img class="splash1" src="/chinese1.png" width={200} height={500}></img>
   
</div>


{/*  column 3  */}
<img class="splash3" src="./cheese.png" width={300} height={300} ></img>
 
  <div class="splashTags2">
        <h4 class="tag6">  SHARE </h4>
     <p> The favourite activity is to eat together.<br></br> What better way to share and connect. </p>
     </div>


   



   
       
    </>
    )
  }


export default Splash