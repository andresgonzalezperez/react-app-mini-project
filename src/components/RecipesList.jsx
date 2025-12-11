import { useState } from "react";
import recipesData from "../assets/recipes.json";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const deleteRecipe = (idToDelete) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== idToDelete);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </div>
  );
};

export default RecipesList;


