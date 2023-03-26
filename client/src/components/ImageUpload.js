import React, { useRef } from 'react'
import '../styles/ImageUpload.css'
import CameraIcon from '../images/icons/camera-icon.png'

const ImageUpload = ({ onImageSelect }) => {
  const fileInputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onImageSelect(e.dataTransfer.files[0])
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageSelect(e.target.files[0])
    }
  }

  return (
    <div
      className="image-upload"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <div className="photo-space__image">
        <img src={CameraIcon} alt='' className="" />
      </div>
    </div>
  )
}

export default ImageUpload