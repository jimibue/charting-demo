import React, { useState, useEffect } from "react";
import Axios from "axios";
import List from "./customComponents/List";

export default function WeatherDemo() {
  const [dailyTotals, setDailyTotals] = useState([]);
  const [dailyNutrients, setDailyNutrients] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    getWeatherData();
  }, []);
  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setRecipes(data.hits);
  // };

  const url =
    "https://api.edamam.com/api/nutrition-details?app_id=a2087ca4&app_key=5a84f1d60f717f6d1a18a7233fcabd41";

  const recipe = {
    title: "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
    prep:
      "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
    yield: "About 15 servings",
    ingr: [
      "1 fresh ham, about 1 pounds, prepared by your butcher (See Step 1)",
      "7 cloves garlic, minced",
      "1 tablespoon caraway seeds, crushed",
      "4 teaspoons salt",
      "Freshly ground pepper to taste",
      "1 teaspoon olive oil",
      "1 medium onion, peeled and chopped",
      "3 cups sourdough rye bread, cut into 1/2-inch cubes",
      "1 1/4 cups coarsely chopped pitted prunes",
      "1 1/4 cups coarsely chopped dried apricots",
      "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
      "2 teaspoons chopped fresh rosemary",
      "1 egg, lightly beaten",
      "1 cup chicken broth, homemade or low-sodium canned",
    ],
  };

  async function getWeatherData() {
    try {
      let res = await Axios.post(url, recipe);

      const object = { a: 1, b: 2, c: 3 };

      const { totalDaily, totalNutrients } = res.data;
      let totalDailyArray = [];
      for (const property in totalDaily) {
        totalDailyArray.push(totalDaily[property]);
      }
      setDailyTotals(totalDailyArray);
      // {label: "Energy", quantity: 926.4008730969899, unit: "%"}

      let nutrientArray = [];
      for (const property in totalNutrients) {
        nutrientArray.push(totalNutrients[property]);
      }
      // [{ label: "Carbs", totalDailyquantity: "45%", amount: "123g" }][
      //   { label: "ENERGY", totalDailyquantity: "926%", amount: "-" }
      // ][{ label: "k", totalDailyquantity: "-", amount: "43g" }];

      setDailyNutrients(nutrientArray);
      // {label: "Carbs", quantity: 417.07965316320997, unit: "g"}

      debugger;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <List
        header="Daily Totals for recipe"
        data={dailyTotals}
        renderItem={(dti) => (
          <div key={`Totals-${dti.label}-${dti.quantity}`}>
            <h3>{dti.label}</h3>
            <p>{`is meeting ${Math.round(dti.quantity)}${
              dti.unit
            } of your daily needs`}</p>
          </div>
        )}
      />
      <List
        header="Daily Nutrinet for recipe"
        data={dailyNutrients}
        renderItem={(dti) => (
          <div key={`Nutrinets-${dti.label}-${dti.quantity}`}>
            <h3>{dti.label}</h3>
            <p>{`has ${Math.round(dti.quantity)}${dti.unit}`}</p>
          </div>
        )}
      />
    </div>
  );
}
