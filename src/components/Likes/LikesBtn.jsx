import React, { useState, useEffect } from 'react';
import StoresService from "../../services/store.service.js"
import "./LikesBtn.css";



export default function LikesBtn ({store}) {
  const [likes, setLikes] = useState(null);

  useEffect(() =>{
    setLikes(store.storeLikes.length)
  }, [])

  const handleOnChange= (e) => {
    e.preventDefault();

    StoresService.getStoresLiked(store._id)
    .then((response) => {
      setLikes(response.data.length)
    })

  }

  return(
    <>
      <p>{likes} Likes </p>
      <div className="div-btn">
        <button className="heartbutton" onClick={handleOnChange}>
          <div>
            <img
              src="https://pngroyale.com/wp-content/uploads/2021/11/Download-emoji-heart-.png"
              style= {{"width":"30px"}} alt= "like button" value= {store.storeLikes.length}
            />
          </div>
        </button>
      </div>
    </>

  )
}

/* 

  handleOnChange = (event) => {
    this.setState({ count: this.state.count + 1 });
@@ -27,6 +60,6 @@ class LikesBtn extends Component {
      </div>
    );
  }
}
 */




