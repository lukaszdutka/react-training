import axios from 'axios';
import constants from "../constants";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + constants["client-id"]
  }
});