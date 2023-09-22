export const SEARCH_MUSIC = "SEARCH_MUSIC";
export const SEARCH_MUSIC_SUCCESS = "SEARCH_MUSIC_SUCCESS";
export const SEARCH_MUSIC_FAILURE = "SEARCH_MUSIC_FAILURE";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const searchMusic = (query) => ({
  type: SEARCH_MUSIC,
  payload: query,
});
export const searchMusicSuccess = (songs) => ({
  type: SEARCH_MUSIC_SUCCESS,
  payload: songs,
});

export const searchMusicFailure = (error) => ({
  type: SEARCH_MUSIC_FAILURE,
  payload: error,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});

export const fetchMusic = (query) => {
  console.log("Chiamata a fetchMusic con query:", query); // Aggiungi questa riga
  return async (dispatch) => {
    if (query.length > 2) {
      try {
        // Imposta le tue chiavi API RapidAPI
        const apiKey = "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5";
        const apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });

        if (response.ok) {
          const data = await response.json();
          const songs = data.data;
          console.log("Dati ottenuti dalla richiesta API:", songs);

          dispatch(searchMusicSuccess(songs));
        } else {
          console.error("Errore nella ricerca delle canzoni. Stato della risposta:", response.status);

          dispatch(searchMusicFailure("Errore nella ricerca delle canzoni"));
        }
      } catch (error) {
        console.error("Errore nella ricerca delle canzoni:", error);

        dispatch(searchMusicFailure(error.message));
      }
    } else {
      // Gestisci il caso in cui la query non sia valida (lunghezza < 3)
      // Puoi fare qualcosa qui, ad esempio dispatchare un'azione o mostrare un messaggio di errore
    }
  };
};
