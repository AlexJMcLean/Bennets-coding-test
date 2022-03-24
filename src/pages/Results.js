import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBeer } from "../actions/beers";
import styled from "styled-components";

import SingleBeer from "../components/SingleBeer";

const ResultsPageStyles = styled.main`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default function ResultsPage() {
  const { beers } = useSelector((state) => state.beers);

  return (
    <ResultsPageStyles>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </ResultsPageStyles>
  );
}
