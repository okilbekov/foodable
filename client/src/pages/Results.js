import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Card from '../components/Card'

const ResultsPage = () => {
	const navigate = useNavigate()
	const location = useLocation()
  	const results = location.state.results

	const handleRecipeClick = (id) => {
		navigate(`/recipe/${id}`)
	}

	console.log(results)

	return (
		<div className='header-inner'>
			<div className='container'>
				<div className='header-card-inner__content'>
					{results.map((result) => (
						<Card
							key={result.id}
							result={result}
							onClick={() => handleRecipeClick(result.id)}
					/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ResultsPage