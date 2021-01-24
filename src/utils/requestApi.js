import axios from 'axios';


const requestApi = {
  get: function (requestObject) {
    return axios.get(requestObject)
  }
}

export default requestApi;