import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';


function App() {
  const [recipes, setRecipes] = useState (sampleRecipes)

  return (
    <RecipeList recipes={recipes}/>
    //<Recipe recipes={recipes}/>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Burger and Fries",
    servings: 3,
    cookTime: "1.45",
    directions: "1. Preheat oven to 200 C\n2. Cut the onions in rings\n3. Wash the green salad and dry it\n4. Cut the paddies in half",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds"

      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs"

      }
    ]
  },
  {
    id: 2,
    name: "Greek Salad",
    servings: 5,
    cookTime: "0.45",
    directions: "1. Cut Cucumber\n2. Cut tomatoes \n3. Eat eat",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds"

      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs"

      }
    ]
  }

]



export default App;
