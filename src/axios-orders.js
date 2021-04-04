import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burgerapp-34520-default-rtdb.firebaseio.com/'
})

export default instance;