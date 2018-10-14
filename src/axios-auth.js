import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-stock-trader-d1eb5.firebaseio.com'
})

instance.defaults.headers.common['something'] = 'something'

export default instance