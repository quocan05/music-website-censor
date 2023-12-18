const initialState = {
  open: false,
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL_DETAIL_SONG":
      return {
        ...state,
        open: true,
      };
    case "CLOSE_MODAL_DETAIL_SONG":
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
