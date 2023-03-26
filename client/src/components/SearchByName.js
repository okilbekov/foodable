import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SearchByName = () => {
	const [searchName, setSearchName] = useState('')
	const navigate = useNavigate()

	const handleSearchByName = async () => {
		if (!searchName.trim()) {
			alert('enter the fucking name, bitch')
			return
		}

		const options = {
			method: 'GET',
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
			params: {
				query: searchName,
				ranking: '2'
			},
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
				'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
			}
		}

		try {
			const response = await axios.request(options)
			const uniqueRecipes = response.data.results.reduce((accumulator, currentValue) => {
				const existingRecipe = accumulator.find(recipe => recipe.title === currentValue.title)
				if (!existingRecipe) {
				  	accumulator.push(currentValue)
				}
				return accumulator
			}, [])
			navigate('/results', { state: { results: uniqueRecipes } })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='name-input__space' >
			<input
				type="text"
				value={searchName}
				onChange={(e) => setSearchName(e.target.value)}
				placeholder="Search by food name"
				className="name-input"
			/>
			<button className='name-input__button' onClick={handleSearchByName}>Search</button>
		</div>
	)
}

export default SearchByName