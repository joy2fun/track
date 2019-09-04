
import axios from 'axios'

const http = axios.create({
  baseURL: '/api/',
  timeout: 5000
});

export default {
  getEvaluation() {
    return http.get('evaluation')
  },
  updateEvaluation(items) {
    return http.post('evaluation', {
      items: items
    })
  }
}
