import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fa36eb36624f403988559c3b41a59323',
  },
})
