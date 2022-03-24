export default function beers(
  state = { isLoading: true, beers: [], savedBeers: [] },
  action
) {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
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
