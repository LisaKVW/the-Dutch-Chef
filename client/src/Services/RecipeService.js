import ApiClient from './ApiClient'

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
export const __GetPosts = async () => {
  try {
    const res = await ApiClient.get(`/recipe`)
    return res.data
  } catch (error) {
    throw error
  }
}

// click on recipe - and go next page to find recipe details
export const __GetPostById = async (recipeId) => {
  try {
    const res = await ApiClient.get(`/recipe/${recipeId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

//update recipe
export const __UpdatePost = async (formData, recipeId) => {
  try {
    const res = await ApiClient.put(`/recipe/${recipeId}`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

// delete recipe
export const __DeletePost = async (recipeId) => {
  try {
    const res = await ApiClient.delete(`/recipe/${recipeId}`)
    return res
  } catch (error) {
    throw error
  }
}

// the path for the services come from the router folder and need to match