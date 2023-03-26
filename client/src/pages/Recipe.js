import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Recipe = () => {
	const recipeId = useParams().id
	const [recipe, setRecipe] = useState(null)



	useEffect(() => {
		const fetchRecipe = async () => {
			const options = {
				method: 'GET',
				url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${encodeURIComponent(recipeId)}/information`,
				headers: {
				  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
				  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
				}
			}
			const response = await axios.request(options)
			setRecipe(response.data)
			console.log(response.data)
		}

		
		fetchRecipe()
	}, [recipeId])

	return (
		<div>
			{recipe &&
				<div className="header-inner">
					<div className="container">
						<div className="food-item__info">
							<p className="food-item__title">
								{recipe.title}
							</p>

							<div className="food-tag__space">
								{recipe.diets.map(diet => (
									<p className="food-tag">{diet}</p>
								))}
								{/* <p className="food-tag">Vegan</p>
								<p className="food-tag">Vegetarian</p> */}
							</div>

							<div className="food-item__main">
								<div className="food-item__photo">
									<img src={recipe.image} alt={recipe.title} className='food-photo' />
								</div>
								<div className="food-item__textspace">
									<p className="food-item__text">
										<div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
									</p>
								</div>

								<div className="food-ingredient__list">
									<p className="ingredients-title"> List of ingredients</p>
									
									<ul>
										{recipe.extendedIngredients.map(ingredient => (
											<li className="ingredient-item" key={ingredient.id}>{ingredient.original}</li>
										))}
									</ul>
								</div>

								<div className="food-cooking">
									<p className="cooking-title"> Cooking instructions</p>
									{recipe.analyzedInstructions[0].steps.map(step => (
										<li key={step.number} className="food-cooking__item"> <strong>Step {step.number}:</strong> {step.step}</li>
									))}
								</div>

							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Recipe