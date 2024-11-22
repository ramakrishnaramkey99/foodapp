import { useEffect } from "react";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "bc45cde4d6364dd1b0176ccdc1b3fb0d";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apikey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);
  return <div>Food Details {foodId}</div>;
}
