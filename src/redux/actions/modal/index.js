export const openModalDetailSong = () => ({
  type: "OPEN_MODAL_DETAIL_SONG",
  payload: true,
});

export const closeModalDetailSong = () => ({
  type: "CLOSE_MODAL_DETAIL_SONG",
  payload: false,
});

export const openModalAddNewPlaylist = () => ({
  type: "OPEN_MODAL_ADD_NEW_PLAYLIST",
  payload: true,
});

export const closeModalAddNewPlaylist = () => ({
  type: "CLOSE_MODAL_ADD_NEW_PLAYLIST",
  payload: false,
});
