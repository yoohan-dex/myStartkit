import { combineReducers } from 'redux';

const initialState = {
  article: 'yoohoo!',
};
function contentReducer(state = initialState, action) {
  return initialState;
}


export default function reducerCreator() {
  return combineReducers({
    contentReducer,
  });
}
