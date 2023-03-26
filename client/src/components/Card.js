import React from 'react'


const Card = ({ result, onClick }) => {
	const trimTitle = (title) => {
		if (title.length > 20) {
			return title.slice(0, 20) + '...'
		}
		return title
	}

	return (
		<div className="card" onClick={onClick}>
			<img src={result.image} alt={result.title}className="card-photo" />
			<div className="card-info">
				<p className="card-title">{trimTitle(result.title)}</p>
			</div>
		</div>
	)
}

export default Card