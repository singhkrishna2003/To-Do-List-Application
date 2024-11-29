import axios from 'axios';

axios.defaults.withCredentials = true;
const SERVER_URL = 'https://todo-list-application-nine.vercel.app/api';


const registerUser = (data)=>{
    return axios.post(SERVER_URL+'/register',data);
}

const loginUser = (data)=>{
    return axios.post(SERVER_URL+'/login',data);
}


const AuthServices = {
    registerUser,
    loginUser
}


export default AuthServices;


