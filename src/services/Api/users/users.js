import axios from 'axios'

const endPoint = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export default endPoint
