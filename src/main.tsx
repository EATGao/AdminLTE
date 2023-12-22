import React from 'react'
import ReactDOM from 'react-dom/client'
// put the reset-css on the top of other css files
import "reset-css"
// UI framework style

// Component style
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
