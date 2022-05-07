// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Local
import { App } from './App'

// Others
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
