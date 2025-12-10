import { useState } from "react";
import recipesData from "../assets/recipes.json";

const RecipesList = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const deleteRecipe = (idToDelete) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== idToDelete);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => {
        const isLight = recipe.calories <= 150;

        return (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-info">
              <h1>
                {recipe.name}
              </h1>
              <h2>
                Calories: {recipe.calories}
              </h2>
              <h3 className="recipe-labels">
                {isLight && <span className="label light">Light ✔️</span>}
                {!isLight && <span className="label heavy">Heavy ❌ </span>}
              </h3>
            </div>

            <button onClick={() => deleteRecipe(recipe.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesList;

