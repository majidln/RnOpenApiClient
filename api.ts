import 'react-native-url-polyfill/auto';
import {PetApi, UserApi, Configuration} from './generated';
import axios from 'axios';

const config = new Configuration();
const axiosInstance = axios.create({
  headers: {Authorization: 'YOUR_TOKEN'},
});

const petApi = new PetApi(config, 'example.com', axiosInstance);
const userApi = new UserApi(config, 'example.com', axiosInstance);

export {petApi, userApi};
