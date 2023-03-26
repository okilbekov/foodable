import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import TagInput from './TagInput'
import TagsContainer from './TagsContainer'

const SearchByIngredients = () => {
	const [ingredients, setIngredients] = useState([])
	const navigate = useNavigate()

	const handleSearchByIngredients = async () => {
		const options = {
			method: 'GET',
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
			params: {
			  ingredients: ingredients.join(','),
			  number: '6',
			  ignorePantry: 'true',
			  ranking: '1'
			},
			headers: {
			  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
			  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
			}
		  }

		try {
			const response = await axios.request(options)
			navigate('/results', { state: { results: response.data } })
		} catch (error) {
			console.error('Error searching by ingredients:', error)
		}
	}

	const handleAddIngredient = (ingredient) => {
		setIngredients([...ingredients, ingredient])
	}
	
	const handleRemoveIngredient = (index) => {
		setIngredients(ingredients.filter((_, i) => i !== index))
	}


	return (
		<div>
			<div >
				<div className='search-name__space'>
				<TagInput  onAdd={handleAddIngredient} />
				<button className='ingredient-input__button' onClick={handleSearchByIngredients}>Search</button></div>
				<TagsContainer
					ingredients={ingredients}
					onRemove={handleRemoveIngredient}
				/>
				
			</div>
			
		</div>
	)
}

export default SearchByIngredients