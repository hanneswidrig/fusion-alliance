import React from 'react'
import { ThemeProvider } from 'styled-components'
import Menu from './components/Navigation/Menu'
import theme from './styles/theme'

const App = () => (
	<ThemeProvider theme={theme}>
		<Menu />
	</ThemeProvider>
)

export default App
