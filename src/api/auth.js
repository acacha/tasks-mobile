import axios from 'axios'

export default {
  login (credentials) {
    return axios.post(process.env.API_URL + '/proxy/oauth/token', credentials)
  }
}
