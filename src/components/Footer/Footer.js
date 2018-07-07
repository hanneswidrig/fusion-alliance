import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import building from '../../images/icons/building.svg'
import twitter from '../../images/icons/twitter.svg'
import linkedin from '../../images/icons/linkedin.svg'
import rss from '../../images/icons/rss.svg'

const locations = ['Indianapolis', 'Cincinnati', 'Columbus']
const socials = [
	{
		name: 'Twitter',
		sourceUrl: 'https://twitter.com/fusionalliance',
		src: twitter,
		alt: 'twitter icon',
	},
	{
		name: 'Linkedin',
		sourceUrl: 'https://www.linkedin.com/company/fusion-alliance',
		src: linkedin,
		alt: 'linkedin icon',
	},
	{
		name: 'RSS',
		sourceUrl: 'http://fusionalliance.com/feed/',
		src: rss,
		alt: 'rss feed icon',
	},
]

const BuildingIcon = styled.img`
	width: 71px;
`

const Wrapper = styled.footer`
	background-color: hsla(202, 100%, 37%, 1);
	font-family: ${props => props.fonts.renner};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: 100px;
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			height: 100%;
			padding: 20px 0;
			flex-direction: column;
		}
	}
`

const LeftWrapper = styled.div`
	display: flex;
	color: white;
	justify-content: center;
	flex: 1;
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			order: 2;
			margin: 20px;
		}
	}
`

const LocationWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	span:nth-child(2) {
		margin: 5px 0;
	}
`

const Cities = styled.div`
	display: flex;
	flex-direction: column;
`

const CenterWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex: 1;
	@media screen and (max-width: ${props => props.responsive.medium}) {
		& {
			order: 2;
			margin: 20px 0;
		}
	}
`

const RightWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
`

const Copyright = styled.div`
	color: white;
	text-align: center;
`

const Privacy = styled.div`
	display: flex;
	margin-top: 12px;
	justify-content: space-evenly;
	a {
		color: white;
	}
`

const SocialMediaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const SocialMedia = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	color: white;
	img {
		margin-right: 8px;
		width: 16px;
		height: 16px;
	}
	a {
		color: white;
	}
	a:nth-child(2) {
		margin: 4px 0;
	}
`

const Footer = props => (
	<Wrapper {...props}>
		<LeftWrapper {...props}>
			<LocationWrapper {...props}>
				<BuildingIcon src={building} alt="Building Icon" />
				<Cities {...props}>
					{locations.map(entry => <span key={entry}>{entry}</span>)}
				</Cities>
			</LocationWrapper>
		</LeftWrapper>
		<CenterWrapper {...props}>
			<Copyright {...props}>Copyright &#169; Fusion Alliance 2018</Copyright>
			<Privacy {...props}>
				<Link to="#">Privacy Policy</Link>
				<Link to="#">Terms of Service</Link>
			</Privacy>
		</CenterWrapper>
		<RightWrapper {...props}>
			<SocialMediaWrapper {...props}>
				{socials.map(entry => (
					<SocialMedia {...props} key={entry.name}>
						<img src={entry.src} alt={entry.alt} />
						<a href={entry.sourceUrl}>{entry.name}</a>
					</SocialMedia>
				))}
			</SocialMediaWrapper>
		</RightWrapper>
	</Wrapper>
)

export default Footer
