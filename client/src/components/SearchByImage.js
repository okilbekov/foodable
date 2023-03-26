import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import ImageUpload from '../components/ImageUpload'

const SearchByImage = () => {
	const navigate = useNavigate()

	const handleSearchByImage = async (uploadedImage) => {
		if (!uploadedImage) {
			console.log(uploadedImage)
			alert('Please upload an image first.')
			return
		}

		try {
			const formData = new FormData()
			formData.append('image', uploadedImage)
	  
			const response = await axios.post('https://foodable-do7cq3w77q-ue.a.run.app/predict', formData, {
			  headers: { 'Content-Type': 'multipart/form-data' },
			})

			console.log(response)

			const fetchRecipes = async (searchName) => {
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
					return response.data.results
				} catch (error) {
					console.log(error)
				}
			}
			console.log(123)
			const predictedFoods = response.data
			const recipeRequests = predictedFoods.map((food) => fetchRecipes(food.class))
			const recipeResults = await Promise.all(recipeRequests)
			const combinedResults = [].concat(...recipeResults)
			
			const uniqueRecipes = combinedResults.reduce((accumulator, currentValue) => {
				const existingRecipe = accumulator.find(recipe => recipe.title === currentValue.title)
				if (!existingRecipe) {
				  	accumulator.push(currentValue)
				}
				return accumulator
			}, [])

			navigate('/results', { state: { results: uniqueRecipes } })

		} catch (error) {
			console.error('Error uploading image:', error)
			alert('Failed to upload image. Please try again.')
		}
	}

	const handleImageSelect = (uploadedImage) => {
		handleSearchByImage(uploadedImage)
	}

	return (
		<div>
			<ImageUpload onImageSelect={handleImageSelect} />
		</div>
	)
}

export default SearchByImage