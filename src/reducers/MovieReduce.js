const initialState = {
  cardMovie: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cardMovie: [...state.cardMovie, action.payload],
      };

      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cardMovie: state.cardMovie.filter((el) => el.id != action.payload.id),
      };
      break;
    default:
      return state;
  }
};

export { cartReducer, initialState };

