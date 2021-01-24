import requestApi from './../../utils/requestApi';
import { GET_GALLERY } from './../../utils/constants';
export function getGallery(id) {
  return function (dispatch) {
    requestApi.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then(res => {
      dispatch({ type: GET_GALLERY, data: res.data, id: id })
    }).catch(err => {
      console.log(err);
    })
  }

};