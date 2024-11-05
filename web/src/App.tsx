import type { ReactNode } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

import FatalErrorPage from 'src/pages/FatalErrorPage'

import './index.css'

const extendedTheme = extendTheme(theme)

interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={extendedTheme}>
        <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
