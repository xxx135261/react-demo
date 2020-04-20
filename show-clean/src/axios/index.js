import HttpRequest from './axios'
// import { baseUrl } from '@/config'
const baseUrl = 'http://localhost:8000/'
const axios = new HttpRequest(baseUrl)
export default axios
