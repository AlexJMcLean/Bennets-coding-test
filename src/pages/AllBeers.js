import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getBeers } from "../actions/beers";
import SingleBeer from "../components/SingleBeer";
import CircularLoader from "../components/CircularLoader";

const ResultsPageStyles = styled.main`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default function AllBeersPage() {
  const isLoading = useSelector((state) => state.isLoading);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBeers(page));
  }, [dispatch, page]);

  const getNextPage = () => {
    setPage(page + 1);
    console.log("getting next page");
    window.scrollTo(0, 0);
  };
  const beers = useSelector((state) => state.beers?.beers);

  return (
    <>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <>
          <ResultsPageStyles>
            {beers.map((beer) => (
              <SingleBeer key={beer.id} beer={beer} />
            ))}
          </ResultsPageStyles>
          <button className="btn" onClick={getNextPage}>
            Next Page
          </button>
        </>
      )}
    </>
  );
}
