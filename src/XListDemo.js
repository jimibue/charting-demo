import React from "react";
import styled from "styled-components";
import { device } from "./XConsts";

export default function XListDemo({ data, renderItem }) {
  console.log("data", data);
  return (
    <>
      <h1>List</h1>
      <ListContainer>
        {data.map((item) => renderItem(item))}
        {/* {data.map((item) => (
          <div>{item.country}</div>
        ))} */}
      </ListContainer>
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
