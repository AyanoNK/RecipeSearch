import React, { useState } from "react";
import RecipeDetails from "./Details";

// Stateless component porque solo es de presentación
// Se recibe el parametro de receta del query de map en App.jsx
const Recipe = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  // Se atrapan los valores
  const { label, image, url, ingredients } = recipe.recipe;
  // Se devuelve la la vista del componente
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      {/* No referrrer se usa para que el sitio al que se va a
      ir no reciba información de dónde se vino.
      _blank se usa para abrir el enlace en una nueva pestaña,
      no opener se usa para evitar robo de datos (?) */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        Saber más
      </a>

      <button onClick={() => setShowIngredients(!showIngredients)}>
        Ingredientes
      </button>
      {showIngredients && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
