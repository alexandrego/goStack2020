import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.59:3333',
});

export default api;

// Para usar o dispositivo fisico precisamos pegar o IP da máquina
// baseURL: 'http://192.168.0.59:3333',