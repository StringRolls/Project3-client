import axios from 'axios';

class FriendsService {
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

    followFriend = (friendId) =>{
        return this.app.post(`/api/user/follow/${friendId}`)
    }

    unfollowFriend = (friendId) =>{
        return this.app.post (`/api/user/unfollow/${friendId}`)
    }
    
    checkIfFollowing = (friendId) =>{
        return this.app.get(`/api/user/checkfollowing/${friendId}`)
    }

    searchNewFriends = () => {
        return this.app.get(`/api/user/search/users`)
        .then(response => (response.data))
    }

    getAllFriends = () => {
        return this.app.get('/api/user/friends')
    }
}

const FriendService = new FriendsService();

export default FriendService;