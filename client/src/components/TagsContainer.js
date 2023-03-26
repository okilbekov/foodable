import React from 'react'
import '../styles/TagsContainer.css'
import Tag from './Tag'

function TagsContainer({ ingredients, onRemove }) {
  return (
    <div className="tags-container">
      {ingredients.map((ingredient, index) => (
        <Tag
          key={index}
          text={ingredient}
          onDelete={() => onRemove(index)}
        />
      ))}
    </div>
  );
}

export default TagsContainer;
