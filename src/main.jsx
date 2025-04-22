import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css样式
// import './styles/base/reset.css'
import './styles/base/variables.css'
import './styles/base/typography.css'
import './styles/utils/animations.css'
import './styles/global.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
