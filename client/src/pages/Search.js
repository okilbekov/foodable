import React from 'react'

import SearchByImage from '../components/SearchByImage'
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
						<h1 className="new-title">
						Or you could even search by ingredients
					</h1>
					<SearchByIngredients />
				</div>
			</div>
		</div>
	)
}

export default Search