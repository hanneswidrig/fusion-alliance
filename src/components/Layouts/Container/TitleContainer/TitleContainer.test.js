import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import TitleContainer from './TitleContainer'
import theme from '../../../../styles/theme'

it(' successfully loads TitleContainer', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<BrowserRouter>
			<TitleContainer
				{...theme}
				height="72px"
				header="insights"
				themeColor={theme.colors.orange}
			/>
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})