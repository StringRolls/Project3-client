import axios from 'axios';

class FriendsService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/friends` })
    }

    followFriend = friend_id =>{
        return this.app.post(`/follow-friends`, friend_id)
    }

    getAllFriends = () => {
        return this.app.get('/friends')
    }
}

const FriendService = new FriendsService();

export default FriendService;