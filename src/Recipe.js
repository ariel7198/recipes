import React from 'react'
import Badge from './Badge'
import { BsClock } from 'react-icons/bs'
import style from './style/recipe.module.css'

const Recipe = ({ title, healthLabels, calories, image, ingredients, time }) => {
    return (
        <div className={style.recipe}>
            <div className={style.recipeThumb}>
                <img className={style.image} src={image} alt="" />
            </div>

            <div className={style.recipeDetails}>
                <div className={style.recipeResume}>
                    <p className={style.recipeTime}> <BsClock /> {time} min </p>
                </div>
                <h1 className=''>{title}</h1>
                <ul className={style.ingredientsList}>
                    <h3> Ingredients </h3>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <p>
                    {calories}
                </p>
                <div className={style.badgesList}>
                    {healthLabels.map(label => (
                        <Badge
                            text={label}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Recipe;