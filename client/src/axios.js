import axios from 'axios'

// axios.create([config])
const instance = axios.create({
  baseURL: 'https://fancy-to-do-wypratama.herokuapp.com'
});

export default instance