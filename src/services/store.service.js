import axios from 'axios';

class StoreService {

    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    // To get the details of one store
    getStoreDetails = (storeId) => {
        return this.app.get(`/api/store/${storeId}`)
    }

    // this is to get the stores the user liked in order to render in the user profile
    getStoresLiked = (storeId) => {
        return this.app.get(`/api/store/${storeId}/like`)
    }
    
   /*  // this is to get the stores the user liked in order to render in the Homepage
    getUsersLikedStores = (userId) => {
        return this.app.get(`/api/store/${userId}/like`)
    } */

    // To get the liked stores filtered by user's friends
    getStoresFriends = () => {
        return this.app.get('/api/store/friends-store')
    }

    // To get all the cuisine types
    getAllCuisines = (type) => {
        return this.app.get(`/api/store/cuisine-types`)
    }
 
    // To get the stores filtered by cuisine
    getStoresByCuisine =() =>{
        return this.app.get('/api/store/by-cuisine-type/:cuisineType')
    }
}

const StoresService = new StoreService();

export default StoresService;