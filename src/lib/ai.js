import OpenAI from 'openai'
import { convertColorsInString, convertToClosestPaletteColor } from './colors'

const textToText = async (apiKey, text) => {
  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  })

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: text }
    ],
    model: 'gpt-4o-mini',
  })

  return completion.choices[0].message.content
}

const inspectImage = async (apiKey, dataUri, prompt) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }

  const payload = {
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": prompt,
          },
          {
            "type": "image_url",
            "image_url": {
              "url": dataUri,
            }
          }
        ]
      }
    ],
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    return data.choices[0].message.content
  } catch (error) {
    console.error('Error getting image description:', error)
  }

  return null
}

export const generateCode = async (apiKey, dataUri, palette) => {
  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  })

  const prompt = `Given the image, generate a React component to recreate the page in the image.
You MUST only output code.
DO NOT INCLUDE BACK TICKS OR LANGUAGE NAMES.
All styles MUST be CSS in JS inline.
MAKE SURE YOU USE THE CORRECT FONT, FONT SIZE, SPACING, BORDERS AND COLORS IN THE IMAGE.
YOU MUST INCLUDE ALL ELEMENTS.
COLORS MUST BE IN RGB FORMAT.
WHERE IMAGES ARE - YOU MUST DISPLAY A PLACEHOLDER COLOR WITH A MIN WIDTH & HEIGHT.`

  const code = await inspectImage(apiKey, dataUri, prompt)

  const rgbCode = convertColorsInString(code)
  const colorAdjustedCode = convertToClosestPaletteColor(rgbCode, palette)

  return colorAdjustedCode
}
