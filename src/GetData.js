import React, { useState, useEffect } from "react";
import Axios from "axios";
import { X_RAPIDAPI_KEY } from "./keys";
import CovidStatsTotal from "./CovidStatsTotal";
import CovidBarChart from "./CovidBarChart";

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
    //     "x-rapidapi-key":X_RAPIDAPI_KEY,
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
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    });
    console.log(res.data);
    setCovidData(res.data.response);
  }

  return (
    <div>
      <h1>Data here</h1>
      {covidData.length}
      <CovidBarChart covidData={covidData} count={10} />
      <CovidStatsTotal covidData={covidData} />
    </div>
  );
}
