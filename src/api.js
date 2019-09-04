
import axios from 'axios'

const http = axios.create({
  baseURL: '/api/',
  timeout: 5000
});

export default {
  getEvaluation() {
    return http.get('evaluation')
  },
  updateEvaluation(data) {
    return http.post('evaluation', data)
  }
}
