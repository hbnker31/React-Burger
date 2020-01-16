import axios from 'axios';

const instance =axios.create({
    baseURL:'https://react-my-burger-ee9e7.firebaseio.com/'
});
export default instance;