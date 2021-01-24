import { combineReducers } from 'redux';
import albumLists from './../view/album/album.reducer';
import galleryList from './../view/gallery/gallery.reducer';

const rootReducer = combineReducers({
  albumLists: albumLists,
  galleryList: galleryList
});

export default rootReducer;