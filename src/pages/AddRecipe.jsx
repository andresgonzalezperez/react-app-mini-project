import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddRecipe({ handleAddRecipe }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: uuidv4(),
      name,
      calories: Number(calories),
      image,
      servings: Number(servings),
    };

    handleAddRecipe(newRecipe);

    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
  };

  return (
    <div className="Form-new-recipe">
      <form onSubmit={handleFormSubmit}>
        <span>Add a new recipe</span>

        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Calories
          <input
            name="calories"
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        <label>
          Recipe Image
          <input
            name="image"
            type="url"
            placeholder="Recipe Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          Servings
          <input
            name="servings"
            type="number"
            placeholder="Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </label>

        <button className="Add-recipe-button" type="submit">
          Add recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;

