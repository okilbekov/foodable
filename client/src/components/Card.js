import React from 'react'


const Card = ({ result, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      	<img src={result.image} alt={result.title} className="card-photo" />
      	<div className="card-info">
			<p className="card-title">{result.title}</p>
		</div>
    </div>
  )
}

export default Card