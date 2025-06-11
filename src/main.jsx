import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  },
  {
    path: '/fav',
    element: <FavoritesPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
