import RecipeCard from "./RecipeCard";

const RecipesList = ({ recipes, deleteRecipe }) => {
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



