const initialState = {
  searchQuery: "",
  searchResults: [],
  likedSongs: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MUSIC_SUCCESS":
      return {
        ...state,
        searchResults: action.payload,
      };

    case "SEARCH_MUSIC_FAILURE":
      console.error("Errore nella ricerca delle canzoni:", action.payload);
      return state;

    case "TOGGLE_LIKE":
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
