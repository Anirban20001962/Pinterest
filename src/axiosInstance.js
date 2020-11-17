import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://mighty-fortress-94413.herokuapp.com/'
  })

export default axiosInstance;