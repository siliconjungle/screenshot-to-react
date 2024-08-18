import React from 'react'

const Card = ({ children, noPadding, style }) => {
  return (
    <div
      style={{
        background: `linear-gradient(
          145deg,
          rgb(35, 38, 49),
          rgb(37, 39, 49)
        )`,
        border: '1px solid rgba(52, 53, 60, 1)',
        borderRadius: '8px',
        boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
        fontSize: '18px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundBlendMode: 'multiply, normal',
        padding: noPadding ? 0 : '1em',
        display: 'flex',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Card
