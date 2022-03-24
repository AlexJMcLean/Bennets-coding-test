import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { saveBeer } from "../actions/beers";

const BeerStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  border: solid 1px var(--purple);
  border-radius: 10px;
  padding: 2rem 1rem;
  text-align: center;
  img {
    max-width: 100%;
    height: 200px;
    margin-bottom: 1rem;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }

  i {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }
`;

export default function SingleBeer({ beer }) {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveBeer(beer));
  };

  return (
    <BeerStyles>
      <i className="fa fa-heart" onClick={handleSave} />
      {beer.image_url ? <img src={beer.image_url} alt={beer.name} /> : ""}
      <h2>{beer.name}</h2>
      <p>{beer.abv}</p>
      <p>{beer.description}</p>
    </BeerStyles>
  );
}
