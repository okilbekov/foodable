import React, { useState } from 'react'
import '../styles/TagInput.css'

function TagInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      addIngredient()
    }
  }

  const addIngredient = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <div className="tag-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter ingredients (press Enter or , to add)"
        className="tag-input"
      />
    </div>
  )
}

export default TagInput