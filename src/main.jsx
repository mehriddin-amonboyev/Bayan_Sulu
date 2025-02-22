import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './config/theme.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />    
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
