import axios from 'axios';

  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/mn',
    timeout:5000
  })

  instance.interceptors.request.use(config => {
    return config;
  },err => {
    return err;
  });

  instance.interceptors.response.use(res => {
    return res.data;
  },err => {
    return err;
  })

  export default instance;