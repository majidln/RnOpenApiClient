import 'react-native-url-polyfill/auto';
import {PetApi, UserApi} from './generated';

const petApi = new PetApi();
const userApi = new UserApi();

export {petApi, userApi};
