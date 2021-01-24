import { GET_ALBUMS } from './../../utils/constants';
const INITIAL_STATE = {
  albums: 'loading'
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      let albums = [...action.data];
      return Object.assign({}, state, { albums: albums });
      break;

    default:
      break;
  }
  return state;
}
export default reducer;