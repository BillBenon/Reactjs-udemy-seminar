import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://order-burge-default-rtdb.firebaseio.com/'
});

export default instance;