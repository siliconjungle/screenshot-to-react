import React from 'react'
import { CodeBlock, nord } from 'react-code-blocks'
import Card from './card'

const Block = ({ code, language = 'jsx', showLineNumbers = true, codeBlock = true }) => (
  <Card
    noPadding
  >
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={nord}
      codeContainerStyle={{
        width: '100%',
        backgroundColor: 'transparent',
      }}
      customStyle={{
        width: '100%',
        backgroundColor: 'transparent',
      }}
      
    />
  </Card>
)

export default Block
