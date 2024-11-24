import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e1e18c92af1d414fa61419b342b1e3a3";
export default function Search({ foodData, setFoodData }) {
  const [query, SetQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
      />
    </div>
  );
}
