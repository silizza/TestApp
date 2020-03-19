import {galleryReducer} from './gallery';
import {pictureReducer} from './picture';
import {combineReducers} from 'redux';

export const mainReducer = combineReducers({
    galleryReducer,
    pictureReducer
})