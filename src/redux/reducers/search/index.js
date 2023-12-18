const initialState = {
  input: "",
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        input: action.payload,
      };

    default:
      return state;
  }
};
