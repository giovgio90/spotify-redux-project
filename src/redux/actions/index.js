export const SEARCH_MUSIC_SUCCESS = "SEARCH_MUSIC_SUCCESS";
export const SEARCH_MUSIC_FAILURE = "SEARCH_MUSIC_FAILURE";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const searchMusicSuccess = (songs) => ({
  type: SEARCH_MUSIC_SUCCESS,
  payload: songs,
});

export const searchMusicFailure = (error) => ({
  type: SEARCH_MUSIC_FAILURE,
  payload: error,
});

// export const toggleLike = (songId) => ({
//   type: TOGGLE_LIKE,
//   payload: songId,
// });
