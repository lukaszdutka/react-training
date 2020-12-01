import axios from 'axios';
import constants from "../constants";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: constants["youtube"]["api-key"]
  }
});