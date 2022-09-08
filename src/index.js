import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

function MyApp() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

const root = createRoot(container)
root.render(<MyApp />)