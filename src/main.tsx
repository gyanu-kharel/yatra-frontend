import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.tsx'
import AppUserProvider from './providers/AppUserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppUserProvider>
        <RouterProvider router={router} />
      </AppUserProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
