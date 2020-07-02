import React from "react";
import styled from "styled-components";
import { device } from "../constants/styles";

export default function List({
  data,
  renderItem,
  header,
  colsLarge,
  colsMedium,
  colsSmall,
}) {
  return (
    <>
      {header && <h1>{header}</h1>}
      <ListContainer
        colsLarge={colsLarge}
        colsMedium={colsMedium}
        colsSmall={colsSmall}
      >
        {data.map((item) => renderItem(item))}
      </ListContainer>
    </>
  );
}

function getFrames(numOfFrames) {
  console.log(numOfFrames);
  switch (numOfFrames) {
    case 5:
      return "1fr 1fr fr fr fr";
    case 4:
      return `1fr 1fr fr fr`;
    case 3:
      return "1fr 1fr fr";
    case 2:
      return "1fr fr";
    default:
      return "1fr";
  }
}

const ListContainer = styled.div`
  margin: 10px 50px;
  display: grid;
  grid-template-columns: ${(props) => getFrames(props.colsLarge)};
  grid-gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: ${(props) => getFrames(props.colsMedium)};
  }

  @media ${device.mobile} {
    grid-template-columns: ${(props) => getFrames(props.colsSmall)};
  }
`;
