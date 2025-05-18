import React, { useState, useEffect } from 'react';
import { recipeService } from '../services/apiService';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch recipes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
