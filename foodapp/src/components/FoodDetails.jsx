import { useState, useEffect } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e1e18c92af1d414fa61419b342b1e3a3";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>
              {(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} loading={loading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {loading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
