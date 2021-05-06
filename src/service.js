import axios from 'axios'

const JSON_SERVER_URL = 'http://localhost:4000'

const apiService = {
  getPosts: async () => {
    const result = await axios.get(`${JSON_SERVER_URL}/posts`)
    return result.data
  },
  getPost: async id => {
    const result = await axios.get(`${JSON_SERVER_URL}/posts/${id}`)
    return result.data
  }
}

export { apiService }