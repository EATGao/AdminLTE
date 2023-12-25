import React from 'react'
import ReactDOM from 'react-dom/client'
// put the reset-css on the top of other css files
import "reset-css"
// UI framework style

// Global style
import "@/assets/styles/global.scss"
// Component style

import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)