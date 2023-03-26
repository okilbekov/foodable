import React from 'react'
import '../styles/Tag.css'

function Tag({ text, onDelete }) {
  return (
    <div className="tag">
      <span className="tag-text">{text}</span>
      <button className="tag-delete-button" onClick={onDelete}>
        &times;
      </button>
    </div>
  )
}

export default Tag