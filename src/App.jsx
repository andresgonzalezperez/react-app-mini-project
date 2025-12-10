import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipesList from "./components/RecipesList";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <main>
          <h2>Street Food Recipes</h2>
          <RecipesList />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;



