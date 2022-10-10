import "./HomePage.css";
import React , { useState, useEffect } from "react";
import StoreCard from "../../components/StoreCard/StoreCard.jsx";
import StoresService from "../../services/store.service.js";

export default function HomePage(props) {
  const [cuisines, setFilteredCuisines] = useState(null);
  const [friendsStores, setFriendsStore] = useState(null);
  //const {user} = useContext(AuthContext)

  useEffect(() => {
    // <== ADD THE EFFECT
    StoresService.getAllCuisines()
      .then((response) => {
        setFilteredCuisines(response.data);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    StoresService.getStoresFriends()
      .then((response) => {
        console.log('RESPONSE DATA', response.data)
        setFriendsStore(response.data);
      })
      .catch((error) => error);
  }, [])


  const handleCuisine = (e) => {
    e.preventDefault();

    StoresService.getStoresByCuisine().then((cuisine) =>
      setFilteredCuisines(cuisine)
    );
  };

  return (
    <>
      <div className="logo">
        <img className="logo3" src="../../../logo.jpg" />
      </div>
      <div className="cuisine" style={{ display: "flex", overflowX: "scroll" }}>

        <div className="cuisinetype">
          <a href="/filtered-stores/Pizza"><img className="circle" src="pizza1.png" width={100} height={100} />
          <p className="cuisinetypename"> Pizza </p></a>
        </div>

        <div className="cuisinetype">
          <a href="/filtered-stores/Sushi"><img className="square" src="Sushi.png" width={100} height={100} />
          <p className="cuisinetypename"> Sushi </p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Thai"><img className="square" src="thai.png" width={100} height={100} />
          <p className="cuisinetypename"> Thai</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Chinese"><img className="gyoza" src="chinese1.png" width={100} height={100} />
          <p className="cuisinetypename"> Chinese </p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Ramen"><img className="gyoza" src="ramenn.png" width={100} height={100} />
          <p className="cuisinetypename"> Ramen </p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Soup"><img className="gyoza" src="soup.png" width={100} height={100} />
          <p className="cuisinetypename"> Soup</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Italian"><img className="square" src="italian.png" width={100} height={100} />
          <p className="cuisinetypename"> Italian</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Korean"><img className="square" src="korean.png" width={100} height={100} />
          <p className="cuisinetypename"> Korean</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Vegan"><img className="square" src="vegan.png" width={100} height={100} />
          <p className="cuisinetypename"> Vegan</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Healthy"><img className="gyoza" src="healthy1.png" width={100} height={100} />
          <p className="cuisinetypename"> Healthy</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Indian"><img className="square" src="indian.png" width={100} height={100} />
          <p className="cuisinetypename"> Indian </p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Burgers"><img className="gyoza" src="hambrgerss.png" width={100} height={100} />
          <p className="cuisinetypename"> Burgers</p></a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Breakfast"> <img className="square" src="breakfast.png" width={100} height={100} />
          <p className="cuisinetypename"> Breakfast</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Salad"> <img className="square" src="Salads.png" width={100} height={100} />
          <p className="cuisinetypename"> Salads</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Mexican"> <img className="square" src="/mexican.png" width={100} height={100} />
          <p className="cuisinetypename"> Mexican</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Vegetarian"> <img className="gyoza" src="/vegetarian.png" width={100} height={100} />
          <p className="cuisinetypename"> Vegetarian</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Sandwiches"><img className="gyoza" src="sandwhich.png" width={100} height={100} />
          <p className="cuisinetypename"> Sandwhich</p> </a>
        </div>

        <div className="cuisinetype">
        <a href="/filtered-stores/Mediterranean"> <img className="meditareann" src="/meditareannn.png" width={100} height={100}/>
          <p className="cuisinetypename"> Mediterranean</p> </a>
        </div>
      </div>
      {friendsStores?.map((favStore, index)=>(
        <>
        <StoreCard key={index} store={favStore.store} />
        <div className="borderLikes">
        <img className="borderPhoto" src= {favStore.friend.userImg} width={50} height={50} alt=''/>
        <p className="borderName">{favStore.friend.username}</p>
        </div>
        </>
      ))}
      {/*  <ul>
            {cuisines.map((cuisine) => (
        <div key={props.store._id} className="card">
          <h3><Link href={handleCuisine}>{cuisine}</Link></h3>
        </div>
      ))}
            </ul>  */}
    </>
  );

};

