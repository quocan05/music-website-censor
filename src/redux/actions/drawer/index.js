export const openEditSongDrawer = (data) => ({
  type: "OPEN_DRAWER_EDIT_SONG",
  payload: {
    data: data,
    open: true,
  },
});

export const closeEditSongDrawer = () => ({
  type: "CLOSE_DRAWER_EDIT_SONG",
  payload: {
    data: null,
    open: false,
  },
});
