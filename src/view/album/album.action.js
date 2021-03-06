import requestApi from './../../utils/requestApi';
import { GET_ALBUMS } from './../../utils/constants';
export function getAlbums() {
  return function (dispatch) {
    requestApi.get("https://jsonplaceholder.typicode.com/albums").then(res => {
      dispatch({ type: GET_ALBUMS, data: res.data });
    }).catch(err => {
      console.log(err);
    });
  }
};