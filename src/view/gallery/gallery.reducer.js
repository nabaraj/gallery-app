import { GET_GALLERY } from './../../utils/constants';
const INITIAL_STATE = {
  gallery: {}
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GALLERY:
      let id = action.id;
      return Object.assign({}, state, {
        gallery: updateObject(id, state.gallery, action.data)

      });
      break;

    default:
      break;
  }
  return state;
}
export default reducer;

function updateObject(id, object, data) {
  object[id] = data
  return object;
}