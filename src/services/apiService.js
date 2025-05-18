import { endpoints } from '../config/api';

// Generic fetch function with error handling
const fetchData = async (url, options = {})  => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Recipe API functions
export const recipeService = {
  getAllRecipes: () => fetchData(endpoints.recipes),
  getRecipeById: (id) => fetchData(`${endpoints.recipes}/${id}`),
  createRecipe: (recipeData) => fetchData(endpoints.recipes, {
    method: 'POST',
    body: JSON.stringify(recipeData)
  }),
  updateRecipe: (id, recipeData) => fetchData(`${endpoints.recipes}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(recipeData)
  }),
  deleteRecipe: (id) => fetchData(`${endpoints.recipes}/${id}`, {
    method: 'DELETE'
  })
};

// User recipe API functions
export const userRecipeService = {
  getUserRecipes: () => fetchData(endpoints.userRecipes),
  createUserRecipe: (recipeData) => fetchData(endpoints.userRecipes, {
    method: 'POST',
    body: JSON.stringify(recipeData)
  }),
  updateUserRecipe: (id, recipeData) => fetchData(`${endpoints.userRecipes}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(recipeData)
  }),
  deleteUserRecipe: (id) => fetchData(`${endpoints.userRecipes}/${id}`, {
    method: 'DELETE'
  }),
  updatePrivacySettings: (id, settings) => fetchData(`${endpoints.userRecipes}/${id}/privacy`, {
    method: 'PUT',
    body: JSON.stringify(settings)
  })
};

// Calendar API functions
export const calendarService = {
  getUserCalendar: () => fetchData(endpoints.calendar),
  addRecipeToCalendar: (calendarData) => fetchData(endpoints.addUserRecipe, {
    method: 'POST',
    body: JSON.stringify(calendarData)
  }),
  updateCalendarItem: (id, calendarData) => fetchData(`${endpoints.calendar}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(calendarData)
  }),
  removeRecipeFromCalendar: (id) => fetchData(`${endpoints.calendar}/${id}`, {
    method: 'DELETE'
  })
};
