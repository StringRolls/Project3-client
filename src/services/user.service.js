import axios from 'axios';

class UserService {
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

    getOneUser = (userId) => {
        return this.app.get(`/api/profile/${userId}`)
    }

    getAllUsers = () => {
        return this.app.get('/api/user')
    }

    saveUser = (userId, profileData) => {
        //debugger
        console.log("this is the service saveuser")
        return this.app.post(`/api/user/profile/${userId}/edit`, profileData)
    }
    
}

const userService = new UserService();

export default userService;