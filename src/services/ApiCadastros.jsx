import axios from 'axios';

const Cadastro = axios.create({
    baseURL: 'https://randomuser.me/api/?results=20'
});

export default Cadastro;