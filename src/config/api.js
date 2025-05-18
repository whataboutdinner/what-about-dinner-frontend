const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.whataboutdinner.food'  // Your production backend URL
  : 'http://localhost:5000';            // Your local backend URL

export const endpoints = {
  recipes: `${API_URL}/api/recipes`,
  users: `${API_URL}/api/users`,
  calendar: `${API_URL}/api/calendar`,
  userRecipes: `${API_URL}/api/user/recipes`,
  addUserRecipe: `${API_URL}/api/user/calendar/add-user-recipe`
};

export default API_URL;
// Trigger deployment
