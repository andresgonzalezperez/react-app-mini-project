import RecipesList from "../components/RecipesList";
import AddRecipe from "./AddRecipe";


const DashboardPage = ({recipes, handleAddRecipe, handleDeleteRecipe}) => {
  return (
    <div>
      <AddRecipe handleAddRecipe={handleAddRecipe} />
      <h2>Our Recipes</h2>
      <RecipesList recipes={recipes} deleteRecipe={handleDeleteRecipe} />
    </div>
  );
};

export default DashboardPage;



