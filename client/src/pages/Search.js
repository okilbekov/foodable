import React from 'react'

import SearchByImage from '../components/SearchByImage'
import SearchByName from '../components/SearchByName'
import SearchByIngredients from '../components/SearchByIngredients'


const Search = () => {
	return (
		<div className='header-inner'>
			<div className='container'>
				<div className="header-inner__content">
					<h1 className="header-title">
						Wanna know the food to create
					</h1>
					<p className="header-subtitle">
						Just drag the photo to the space below
					</p>
					<SearchByImage />											
					
					<SearchByIngredients />
				</div>
			</div>
		</div>
	)
}

export default Search