import { SET_ARTIST_PAGE } from "../actions/index";

const initialState = {
  content: {},
};

const artistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_PAGE:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};

export default artistPageReducer;
