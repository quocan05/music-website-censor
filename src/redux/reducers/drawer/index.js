const initialState = {
  open: false,
  data: "",
};

export const DrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER_EDIT_SONG":
      return {
        ...state,
        open: true,
        data: action.payload.data,
      };
    case "CLOSE_DRAWER_EDIT_SONG":
      return {
        ...state,
        open: false,
        data: null,
      };

    default:
      return state;
  }
};
