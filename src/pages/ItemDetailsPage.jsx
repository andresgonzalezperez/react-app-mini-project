import { useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const recipe = recipesData.find((item) => item.id === id);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
};

export default ItemDetailsPage;

