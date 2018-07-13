import React from 'react'
import HeroBanner from '../../Hero/HeroBanner/HeroBanner'
import VideoBanner from '../../Hero/VideoBanner/VideoBanner'
import { IndexSectionContent, FeatureContainer } from './IndexStyles'
import { content } from '../../../content'

const Main = props => {
	return (
		<main>
			<HeroBanner {...props} />
			<VideoBanner />
			<FeatureContainer content={IndexSectionContent(content)} />
		</main>
	)
}

export default Main
