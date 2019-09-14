//Import libraries
import axios from 'axios';

//Variables
const KEY = 'AIzaSyC5jfF8dZABV279uM7iqYPb9fTzFhwmcyQ';

//Export - Create instance
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});