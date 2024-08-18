import React from 'react'
import Stack from './stack'

const Palette = ({ colors }) => {
  return (
    <Stack
      direction="row"
      gap="0.5em"
      style={{
        padding: '0.5em',
        borderRadius: '8px',
        border: '1px solid rgba(52, 53, 60, 1)',
        boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
        background: `linear-gradient(
          145deg,
          rgb(35, 38, 49),
          rgb(37, 39, 49)
        )`,
        backgroundBlendMode: 'multiply, normal',
        width: 'fit-content',
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '1em',
            height: '1em',
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
            borderRadius: '0.25em',
            border: '1px solid rgba(52, 53, 60, 1)',
          }}
        />
      ))}
    </Stack>
  )
}

export default Palette
