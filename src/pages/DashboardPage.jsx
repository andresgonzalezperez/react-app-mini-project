import RecipesList from "../components/RecipesList";
import AddRecipe from "./AddRecipe";


const DashboardPage = ({recipes, handleAddRecipe, handleDeleteRecipe}) => {
  return (
    <div>
      <h2>Our Recipes</h2>
      <AddRecipe handleAddRecipe={handleAddRecipe} />
      <RecipesList recipes={recipes} deleteRecipe={handleDeleteRecipe} />
    </div>
  );
};

export default DashboardPage;



