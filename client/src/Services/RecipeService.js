import ApiClient from './ApiClient'

//NEW for all recipes
// create all recipes with image recipe/multi/:chef_id
export const __PostRecipesWithImgs = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/recipe/multi/${userId}`, formData)
    return res.data
  } catch (error) {
    console.log('post all recipe with Imgs Heroku', error)
  }
}

// this to AddNew Recipe
export const __UploadRecipe = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/recipe/${userId}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

// get Recipe - show main image and title only, like all dinner items
export const __GetRecipe = async () => {
  try {
    const res = await ApiClient.get(`/recipe/view`)
    console.log('log GetRecipe rserice res',res)
    return res.data
  } catch (error) {
    // throw error
    console.log("log get recipe service", error)
  }
}

// click on recipe - and go next page to find recipe details
export const __GetRecipeById = async (recipeId) => {
  try {
    const res = await ApiClient.get(`/recipe/view/${recipeId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

//update recipe
export const __UpdateRecipe = async (formData, recipeId) => {
  try {
    const res = await ApiClient.put(`/recipe/${recipeId}`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

// delete recipe
export const __DeleteRecipe = async (recipeId) => {
  try {
    const res = await ApiClient.delete(`/recipe/${recipeId}`)
    return res
  } catch (error) {
    throw error
  }
}

// the path for the services come from the router folder and need to match