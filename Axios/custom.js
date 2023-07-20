import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'https://crudcrud.com/api/5b8f777c7e4c4d6ab3dc42dd02c3cd4d',
  timeout: 1000,
});
