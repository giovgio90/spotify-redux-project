import { SEARCH_MUSIC_SUCCESS, SEARCH_MUSIC_FAILURE, SET_ALBUM, TOGGLE_LIKE } from "../actions";

const initialState = {
  searchResults: [],
  likedSongs: [],
  loading: false,
  content: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
      };

    case SEARCH_MUSIC_FAILURE:
      return {
        ...state,
        searchResults: [],
        loading: false,
      };

    case SET_ALBUM:
      return { ...state, content: [...state.content, action.payload] };

    case TOGGLE_LIKE:
      const songId = action.payload;
      const likedSongs = state.likedSongs.includes(songId)
        ? state.likedSongs.filter((id) => id !== songId)
        : [...state.likedSongs, songId];
      return {
        ...state,
        likedSongs,
      };

    default:
      return state;
  }
};

export default musicReducer;
