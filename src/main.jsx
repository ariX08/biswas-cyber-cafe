import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LegalPage from './LegalPage.jsx'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const legalKeys = {
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/security': 'security',
  '/cookies': 'cookies',
}

const legalKey = legalKeys[path]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {legalKey ? <LegalPage pageKey={legalKey} /> : <App />}
  </StrictMode>,
)
