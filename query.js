const { Chef, Recipe, Stories } = require('./models')

// create Chef
const createChef = async () => {
  const oneChef = await Chef.create({
    name: 'Lisa'
  })
  console.log(oneChef)
}

// create Recipe
const createRecipe = async () => {
  const oneRecipe = await Recipe.create({
    title: 'steak',
    category: 'dinner',
    ingredients: 'rib-eye, herbs and butter',
    instructions: 'sear, oven, rest and eat',
    tips: 'make a sauce or herb butter',
    images: 'steak pict',
    chef_id: 1
  })
  console.log(oneRecipe)
}
// Create Food Story
const createStory = async () => {
  const oneStory = await Stories.create({
    title: 'pizza, always a good option',
    story: 'NY style VS neopolitian',
    images: 'pizza',
    chef_id: 1
  })
  console.log(oneStory)
}
// GET ALL Recipes
const getRecipes = async () => {
  const recipes = await Recipe.findAll({
  })
  console.log(recipes)
}
// GET ALL Stories
const getStories = async () => {
  const stories = await Stories.findAll({
  })
  console.log(stories)
}

// GET ONE recipe
const getOneRecipe = async () => {
  const recipe = await Recipe.findOne({ where: { id: 1 } })
  // stringer(recipe)
  console.log(recipe)
}
// GET ONE Story
const getOneStory = async () => {
  const story = await Stories.findOne({ where: { id: 1 } })
  // stringer(recipe)
  console.log(story)
}
//UPDATE RECIPE
const updateRecipe = async () => {
  const recipe = await Recipe.update(
    {
      title: 'Banana Bread with choc',
      category: 'Sweets',
      ingredients: 'banana, flour, sugar',
      instructions: 'mix and bake',
      tips: 'add some Nutella swirls',
      images: 'test BANANA',
    },
    { where: { id: 1 }, returning: true }
  )
  console.log(recipe)
}

// UPDATE STORIES
const updateStory = async () => {
  const story = await Stories.update(
    {
      title: 'Omakase during Covid-19',
      story: 'Ishikawa - sushi heaven - love the truffle touches',
      images: 'sushi',
    },
    { where: { id: 1 }, returning: true }
  )
  console.log(story)
}

// DELETE RECIPE
const deleteRecipe = async () => {
  await Recipe.destroy({ where: { id: 0 } })
}
// DELETE STORY
const deleteStory = async () => {
  await Stories.destroy({ where: { id: 0 } })
}


const run = async () => {
  try {
    // await createChef()
    // await createRecipe()
    // await createStory()
    // await getRecipes() 
    // await getStories()
    //  await getOneRecipe() 
    // await getOneStory()
    //await updateRecipe()
    // await updateStory() 
    // await deleteRecipe()
    //await deleteStory()

  } catch (error) {
    throw error
  }
}

run()