import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-builder-4fde6-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;