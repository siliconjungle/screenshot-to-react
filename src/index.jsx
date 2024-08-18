import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import ImagePicker from './components/image-picker'
import Palette from './components/palette'
import { extractDominantColors } from './lib/colors'
import Stack from './components/stack'
import Card from './components/card'
import CodeBlock from './components/code-block'
import { generateCode } from './lib/ai'

const App = () => {
	const [apiKey, setApiKey] = useState(null)
	const [image, setImage] = useState(null)
	const [dominantColors, setDominantColors] = useState(null)
	const [code, setCode] = useState(null)

	const handleImageUpload = (image) => {
		setDominantColors(null)
		setCode(null)
		setImage(image)
	}

	useEffect(() => {
		if (!apiKey || !image) {
			return
		}

		extractDominantColors(image).then((colors) => {
			setDominantColors(colors)

			generateCode(apiKey, image, colors).then((code) => {
				setCode(code)
			})
		})
	}, [apiKey, image])

	return (
		<Stack
			direction="column"
			gap="1em"
			style={{
				padding: '2em',
			}}
		>
			<h1
				style={{
					margin: 0,
				}}
			>
				Generate React code from a screenshot
			</h1>
			<Stack
				direction="column"
				gap="0.5em"
			>
				<label
					htmlFor="api-key"
				>
					Open AI - API Key:
				</label>
				<input
					id="api-key"
					type="password"
					value={apiKey || ''}
					onChange={(e) => setApiKey(e.target.value)}
					style={{
						background: `linear-gradient(
							145deg,
							rgb(35, 38, 49),
							rgb(37, 39, 49)
						)`,
						border: '1px solid rgba(52, 53, 60, 1)',
						borderRadius: '4px',
						boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
						color: 'white',
						maxWidth: '100%',
						width: 'fit-content',
						padding: '0.5em',
					}}
				/>
			</Stack>
			<ImagePicker
				image={image}
				setImage={handleImageUpload}
			/>
			{dominantColors && (
				<Stack
					direction="column"
					gap="0.5em"
				>
					<p style={{ fontWeight: 'bold' }}>Palette:</p>
					<Palette colors={dominantColors} />
					<Card
						style={{
							width: '100%',
							maxWidth: '500px',
							maxHeight: '200px',
							overflow: 'auto',
						}}
					>
						<pre>
							{JSON.stringify(dominantColors, null, 2)}
						</pre>
					</Card>
				</Stack>
			)}
			{image && apiKey && code === null && (
				<p>
					Generating code...
				</p>
			)}
			{code && (
				<Stack
					direction="column"
					gap="0.5em"
				>
					<p style={{ fontWeight: 'bold' }}>Code:</p>
					<CodeBlock
						code={code}
					/>
				</Stack>
			)}
		</Stack>
	)
}

const root = document.createElement('div')
root.id = 'root'

document.body.appendChild(root)
ReactDOM.createRoot(root).render(<App />)
