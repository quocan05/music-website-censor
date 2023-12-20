export const searchAction = (input) => ({
  type: "SEARCH",
  payload: input,
});

export const openModalSearch = () => ({
  type: "OPEN_MODAL_SEARCH",
  payload: true,
});

export const closeModalSearch = () => ({
  type: "CLOSE_MODAL_SEARCH",
  payload: false,
});
