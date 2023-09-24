export const SEARCH_MUSIC_SUCCESS = "SEARCH_MUSIC_SUCCESS";
export const SEARCH_MUSIC_FAILURE = "SEARCH_MUSIC_FAILURE";
export const SET_ALBUM = "SET_ALBUM";
export const SET_ALBUM_PAGE = "SET_ALBUM_PAGE";
export const SET_ARTIST_PAGE = "SET_ARTIST_PAGE";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const searchMusicSuccess = (songs) => ({
  type: SEARCH_MUSIC_SUCCESS,
  payload: songs,
});

export const searchMusicFailure = (error) => ({
  type: SEARCH_MUSIC_FAILURE,
  payload: error,
});

export const setAlbum = (data) => ({ type: SET_ALBUM, payload: data });

export const setAlbumPage = (data) => ({ type: SET_ALBUM_PAGE, payload: data });

export const setArtistPage = (data) => ({ type: SET_ARTIST_PAGE, payload: data });

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});
