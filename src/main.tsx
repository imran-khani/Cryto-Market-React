import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CoinProvider } from './context/CoinContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoinProvider >
      <App />
    </CoinProvider>
  </React.StrictMode>,
)
