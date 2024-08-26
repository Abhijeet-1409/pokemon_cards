import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContextProvider from './context/app_context.jsx'
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </StrictMode>,
)
