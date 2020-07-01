import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function GetData(props) {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    getCovidStats();
  }, []);

  async function getCovidStats() {
    // ****Leaving this here as an example of how to do this with fetch****
    // fetch("https://covid-193.p.rapidapi.com/statistics", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //     "x-rapidapi-key": "c610f37724mshca34574554fd4d5p1959eajsnb27b9bb388f2",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     response.json().then((data) => {
    //       setCovidData(data.response)
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const res = await Axios.get("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "c610f37724mshca34574554fd4d5p1959eajsnb27b9bb388f2",
      },
    });
    setCovidData(res.data.response);
  }

  return (
    <div>
      <h1>Data here</h1>
      {covidData.length}
    </div>
  );
}
