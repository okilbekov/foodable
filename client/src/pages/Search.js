import React from 'react'

import SearchByImage from '../components/SearchByImage'
import SearchByIngredients from '../components/SearchByIngredients'
import SearchByName from '../components/SearchByName'	

const Search = () => {
	return (
		<div className='header-inner'>
			<div className='container'>
				<div className="header-inner__content">
					<h1 className="component-title">
					Welcome to Foodable!	
					</h1>
					<p className="header-subtitle">
					Discover delicious recipes in three easy ways:
					</p>
				
					<p className="component-title">
					1. Search by Image	
					</p>
					<p className="header-subtitle">
					Not sure what to cook? Simply drag and drop a
					 photo of the food you'd like to create in the space below, and we'll provide you with matching recipes.
					</p>
				

					<SearchByImage />											
						<h1 className="component-title">
						2. Search by Ingredients
					</h1>
					<p className="header-subtitle">
					Have a few ingredients on hand and need some inspiration? 
					Enter the ingredients you have, and we'll show you a selection of recipes that use them.
				</p>	

					<SearchByIngredients />
					<p className="component-title	">
					3. Search by Name
				</p>	
				<p className="header-subtitle">
				Enter the name of a dish or an ingredient in the search bar above, and we'll find the perfect recipe for you.
				</p>	
				<SearchByName  />
				</div>
			</div>
		</div>
	)
}

export default Search