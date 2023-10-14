import axios from 'axios'

const API = axios.create({url: 'http://localhost:5000/api'})

const getProperties = async () => {
    const response = await API.get('/properties')
    return response.data
}


export {
    getProperties
}

