import React, { useState, useRef } from 'react'
import CameraIcon from './camera-icon'
import CloseIcon from './close-icon'
import Card from './card'

const ImagePicker = ({
  image,
  setImage,
  width,
  height,
}) => {
  const [active, setActive] = useState(false)
  const [isImageFile, setIsImageFile] = useState(true)
  const [isSingleFile, setIsSingleFile] = useState(true)
  const inputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()

    const files = e.dataTransfer.files

    if (files.length > 1) {
      setIsSingleFile(false)
      setActive(false)
      return
    }

    const file = files[0]

    const reader = new FileReader()

    reader.onload = (e) => {
      setImage(e.target.result)
    }

    if (file?.type.startsWith('image/')) {
      reader.readAsDataURL(file)
    } else {
      setIsImageFile(false)
    }

    setActive(false)
    setIsImageFile(true)
    setIsSingleFile(true)
  }

  const handleDragOver = (e) => {
    e.preventDefault()

    const items = e.dataTransfer.items

    if (items.length > 1) {
      setIsSingleFile(false)
      setIsImageFile(true)
    } else {
      const file = items[0]

      if (file && file.kind === 'file') {
        const fileType = file.type
        if (fileType.startsWith('image/')) {
          setIsImageFile(true)
        } else {
          setIsImageFile(false)
        }
      }
    }
    
    setActive(true)
  }

  const handleDragOut = (e) => {
    e.preventDefault()

    setActive(false)
    setIsImageFile(true)
    setIsSingleFile(true)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      setImage(e.target.result)
    }

    reader.readAsDataURL(file)
  }

  const handleButtonClick = () => {
    inputRef.current.click()
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragOut}
      style={{
        maxWidth: 'min(100%, 400px)',
        ...(image ? {} : { width: '100%' }),
        ...(image ? {} : { minHeight: '200px' }),
        borderRadius: '8px',
        border: active 
          ? (isImageFile && isSingleFile)
            ? '3px dashed rgba(54, 209, 98, 0.8)' 
            : '3px dashed rgba(209, 54, 54, 0.8)' 
          : '3px dashed rgba(43, 44, 51, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        maxHeight: '100%',
        ...(width ? { width } : {}),
      }}
    >
      {image ? (
        <>
          <Card
            noPadding
          >
            <img
              src={image}
              alt="dropped"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                objectFit: 'contain',
                maxHeight: '100%',
                ...(width ? { width } : {}),
                ...(height ? { height } : {}),
              }}
            />
          </Card>
          <button
            style={{
              position: 'absolute',
              top: '1em',
              right: '1em',
              borderRadius: '50%',
              width: '2em',
              height: '2em',
              display: 'flex',
              justifyContent: 'center',
              padding: '0.125em',
              alignItems: 'center',
              cursor: 'pointer',
              background: `linear-gradient(
                145deg,
                rgb(35, 38, 49),
                rgb(37, 39, 49)
              )`,
              backgroundBlendMode: 'multiply, normal',
              border: '1px solid rgba(52, 53, 60, 1)',
              boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
              fontSize: '18px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
            onClick={() => setImage(null)}
          >
            <CloseIcon
              style={{
                color: 'rgb(201, 213, 229)',
                width: '100%',
                height: '100%',
              }}
            />
          </button>
        </>
      ) : (
        <>
          <CameraIcon
            style={{
              color: 'rgba(63, 64, 71, 1)',
              width: '1.5em',
              height: '1.5em',
            }}
          />
          <button
            onClick={handleButtonClick}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
            }}
          />
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  )
}

export default ImagePicker
