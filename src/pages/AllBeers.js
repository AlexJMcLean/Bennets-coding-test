import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getBeers } from "../actions/beers";
import SingleBeer from "../components/SingleBeer";
import CircularLoader from "../components/CircularLoader";

const ResultsPageStyles = styled.main`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default function AllBeersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);
  const { beers } = useSelector((state) => state.beers);

  console.log(beers);
  return (
    <>
      {!beers?.length ? (
        <CircularLoader />
      ) : (
        <ResultsPageStyles>
          {beers.map((beer) => (
            <SingleBeer key={beer.id} beer={beer} />
          ))}
        </ResultsPageStyles>
      )}
    </>
  );
}
