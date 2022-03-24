import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchBeer } from "../actions/beers";

const SearchStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .input-container {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 16px;
    }

    input {
      height: 20px;
      margin-bottom: 12px;
      padding: 8px;
    }
  }
`;

const initialState = {
  name: "",
  abv: "",
  food: "",
};
export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBeer(formState, navigate));
  };
  return (
    <SearchStyles>
      <div className="input-container">
        <div className="inputs">
          <label htmlFor="name">Name of Beer</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleStateChange}
            placeholder="Name"
          />
        </div>
        <div className="inputs">
          <label htmlFor="abv">ABV</label>
          <input
            type="text"
            id="abv"
            name="abv"
            value={formState.abv}
            onChange={handleStateChange}
            placeholder="Abv"
          />
        </div>
        <div className="inputs">
          <label htmlFor="food">Food Pairing</label>
          <input
            type="text"
            id="food"
            name="food"
            value={formState.food}
            onChange={handleStateChange}
            placeholder="Food Pairing."
          />
        </div>
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Go!
      </button>
    </SearchStyles>
  );
}
