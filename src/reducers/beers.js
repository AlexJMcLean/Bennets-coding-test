export default function beers(state = { beers: [], savedBeers: [] }, action) {
  switch (action.type) {
    case "FETCH_BEERS":
      state = { ...state, beers: action.payload.data };
      return state;
    case "SAVE_BEER":
      state = {
        ...state,
        savedBeers: [...state.savedBeers, action.payload.beer],
      };
      return state;
    default:
      return state;
  }
}
