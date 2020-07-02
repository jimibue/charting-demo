import React from "react";
import CovidCard from "./customComponents/CovidCard";

export default function CovidStatsTotal({ covidData }) {
  function formatData() {
    return covidData.map((country) => {
      return <CovidCard country={country} />;
    });
  }
  return <div style={styles.listContainer}>{formatData()}</div>;
}
const styles = {
  listContainer: {
    margin: `10px 50px`,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px",
  },
  container: {
    border: `1px solid`,
    // width: "300px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  statContainer: {},
};
