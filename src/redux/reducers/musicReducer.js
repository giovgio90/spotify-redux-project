import { SEARCH_MUSIC_SUCCESS, SEARCH_MUSIC_FAILURE, TOGGLE_LIKE } from "../actions";

const initialState = {
  searchQuery: "",
  searchResults: [], // Inizializza come un array vuoto
  likedSongs: [],
  loading: false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC_SUCCESS:
      return {
        ...state,
        searchResults: action.payload, // Aggiorna i risultati della ricerca con i dati delle canzoni
        loading: false, // Imposta loading a false poiché la ricerca è stata completata con successo
      };

    case SEARCH_MUSIC_FAILURE:
      return {
        ...state,
        searchResults: [], // Pulisci i risultati in caso di errore
        loading: false, // Imposta loading a false a causa dell'errore
      };

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
