import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import themeExtentend from './components/Theme/theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeExtentend}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)