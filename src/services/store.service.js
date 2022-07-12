import axios from "axios";

class StoreService {
  constructor() {
    this.app = axios.create({
      baseURL: `https://ironhack-sharelicious-server.herokuapp.com`,
    });

    this.app.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getStoreDetails = (storeId) => {
    return this.app.get(`/api/store/${storeId}`);
  };

  saveComment = (storeId) => {
    return this.app.post(`/api/store/${storeId}`);
  };

  // this is to get the stores the user liked in order to render in the user profile
  getStoresLiked = (storeId) => {
    return this.app.post(`/api/like/${storeId}`);
  };

  // To get the liked stores filtered by user's friends
  getStoresFriends = () => {
    //return this.app.get('/api/store/friends-store')
    return this.app.get("/api/like/friendsStores");
  };

  // To get all the cuisine types
  getAllCuisines = (type) => {
    return this.app.get(`/api/store/cuisine-types`);
  };

  // To get the stores filtered by cuisine
  getStoresByCuisine = (cuisineType) => {
    return this.app.get(`/api/store/by-cuisine-type/${cuisineType}`);
  };
}

const StoresService = new StoreService();

export default StoresService;
