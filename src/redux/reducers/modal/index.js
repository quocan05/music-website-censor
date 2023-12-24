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

    case "OPEN_MODAL_SEARCH":
      return {
        ...state,
        open: true,
      };

    case "CLOSE_MODAL_SEARCH":
      return {
        ...state,
        open: false,
      };

    case "OPEN_MODAL_ADD_NEW_PLAYLIST":
      return {
        ...state,
        open: true,
      };

    case "CLOSE_MODAL_ADD_NEW_PLAYLIST":
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};
