import { SET_ALBUM_PAGE } from "../actions/index";

const initialState = {
  content: {},
};

const AlbumPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_PAGE:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};

export default AlbumPageReducer;
