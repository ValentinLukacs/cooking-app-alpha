// rfc für script um einen neuen component zu generieren
import React from 'react'


export default function Recipe(props) {
    const {
        id,
        name, 
        cookTime, 
        servings,
        directions 
    } = props

  return (  
    <div className="recipe">
        <div className='recipe__header'>
            <h1>{name}</h1>
            <div>
                <span>Cook Time</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings</span>
                <span>{servings}</span>
            </div>
        </div>
        <div className='recipe_ingredients'>
            <h2>Ingredients</h2>
            <button>Edit</button>
            <span>
                Buns
                Paddies
                Green Salad
                Cheese
                Onions
            </span>
        </div>
        <div className='recipe_directions'>
            <h2>Directions</h2>
            <button>Edit</button>
            <h3>1. Preparations</h3>
            <span>
               {directions}
            </span>
        </div>
    </div>
  )
}
