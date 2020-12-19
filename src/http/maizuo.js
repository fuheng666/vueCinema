import axios from 'axios'
const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607068294914046350000129","bc":"370200"}'
  }
})
export default instance