import axios from 'axios'

const api = axios.create ({
  baseURL: "http://yourIP:8080",
})

export default api
