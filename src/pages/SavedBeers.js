import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import SingleBeer from "../components/SingleBeer";

const ResultsPageStyles = styled.main`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default function SavedBeerPage() {
  const savedBeers = useSelector((state) => state.beers.savedBeers);

  console.log(savedBeers);
  return (
    <ResultsPageStyles>
      {savedBeers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </ResultsPageStyles>
  );
}
