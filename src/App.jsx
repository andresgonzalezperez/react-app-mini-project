import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import recipesData from "./assets/recipes.json";

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  function handleAddRecipe(newRecipe) {
  setRecipes([newRecipe, ...recipes]);
}

  function handleDeleteRecipe(idToDelete) {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== idToDelete);
    setRecipes(updatedRecipes);
  }

  return (
    <>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <DashboardPage
                  recipes={recipes}
                  handleAddRecipe={handleAddRecipe}
                  handleDeleteRecipe={handleDeleteRecipe}
                />
              }
            />
            <Route path="/item/:id" element={<RecipeDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
