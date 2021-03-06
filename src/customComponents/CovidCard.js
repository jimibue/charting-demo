import React from "react";

export default function CovidCard({ country }) {
  return (
    <div style={styles.container}>
      <h1>{country.country}</h1>
      <div style={styles.statsContainer}>
        <div style={styles.statContainer}>
          <div style={styles.statHeader}>Total Cases</div>
          <div style={styles.statValue}>{country.cases.total}</div>
        </div>
        <div style={styles.statContainer}>
          <div style={styles.statHeader}>Total Deaths</div>
          <div style={styles.statValue}>{country.deaths.total}</div>
        </div>
        <div style={styles.statContainer}>
          <div style={styles.statHeader}>Total Test</div>
          <div style={styles.statValue}>{country.tests.total}</div>
        </div>
      </div>
    </div>
  );
}
const styles = {
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
