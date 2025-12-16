import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, deleteRecipe }) => {
  const isLight = recipe.calories <= 150;

  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      <div className="recipe-info">
        <h1>
          <Link to={`/item/${recipe.id}`}>
          {recipe.name}
          </Link>
          </h1>
        <h2>Calories: {recipe.calories}</h2>

        <h3 className="recipe-labels">
          {isLight && <span className="label light">Light ✔️</span>}
          {!isLight && <span className="label heavy">Heavy ❌</span>}
        </h3>
      </div>

      <button onClick={() => deleteRecipe(recipe.id)} className="delete-button-recipe">
        Delete
      </button>
    </div>
  );
};

export default RecipeCard;
