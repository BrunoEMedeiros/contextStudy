import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { MembersProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MembersProvider>
      <App />
    </MembersProvider>
  </React.StrictMode>
)
