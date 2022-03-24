import * as api from "../api";

export const searchBeer = (formData, navigate) => async (dispatch) => {
  try {
    const formattedName = formData.name.split(" ").join("_");
    const formattedABV = formData.abv !== "" ? parseInt(formData.abv) : "";
    const formattedFood = formData.food.split(" ").join("_");

    let query = "";

    if (formattedName !== "") {
      if (formattedABV !== "") {
        if (formattedFood !== "") {
          query = `?beer_name=${formattedName}&abv_gt=${
            formattedABV - 0.1
          }&abv_lt=${formattedABV + 1}&food=${formattedFood}`;
        } else {
          query = `?beer_name=${formattedName}&abv_gt=${
            formattedABV - 0.1
          }&abv_lt=${formattedABV + 1}`;
        }
      } else if (formattedFood !== "") {
        query = `?beer_name=${formattedName}&food=${formattedFood}`;
      } else {
        query = `?beer_name=${formattedName}`;
      }
    } else if (formattedABV !== "") {
      if (formattedFood !== "") {
        query = `?abv_gt=${formattedABV - 0.1}&abv_lt=${
          formattedABV + 1
        }&food=${formattedFood}`;
      } else {
        query = `?abv_gt=${formattedABV - 0.1}&abv_lt=${formattedABV + 1}`;
      }
    } else {
      query = `?food=${formattedFood}`;
    }

    const { data } = await api.searchBeer(query);

    dispatch({ type: "FETCH_BEERS", payload: { data } });
    navigate("/results");
  } catch (error) {
    console.log(error);
  }
};

export const saveBeer = (beer) => async (dispatch) => {
  try {
    dispatch({ type: "SAVE_BEER", payload: { beer } });
  } catch (error) {
    console.log(error);
  }
};

export const getBeers = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchBeers(page);
    dispatch({ type: "FETCH_BEER", payload: { data } });
  } catch (error) {}
};
