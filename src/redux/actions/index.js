export const searchMusic = (query) => ({
  type: "SEARCH_MUSIC",
  payload: query,
});

export const searchMusicSuccess = (data) => ({
  type: "SEARCH_MUSIC_SUCCESS",
  payload: data,
});

export const searchMusicFailure = (error) => ({
  type: "SEARCH_MUSIC_FAILURE",
  payload: error,
});

export const toggleLike = (songId) => ({
  type: "TOGGLE_LIKE",
  payload: songId,
});

export const fetchMusic = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Dati ricevuti con successo:", data);

        const songs = data.data;

        dispatch(searchMusicSuccess(songs));
      } else {
        console.error("Errore nella ricerca delle canzoni. Stato della risposta:", response.status);
        dispatch(searchMusicFailure("Errore nella ricerca delle canzoni"));
      }
    } catch (error) {
      console.error("Errore nella ricerca delle canzoni:", error);
      dispatch(searchMusicFailure(error.message));
    }
  };
};
