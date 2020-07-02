import React from "react";
import styled from "styled-components";
import { device } from "../constants/styles";

export default function List({ data, renderItem, header }) {
  return (
    <>
      {header && <h1>{header}</h1>}
      <ListContainer>{data.map((item) => renderItem(item))}</ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  margin: 10px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;
