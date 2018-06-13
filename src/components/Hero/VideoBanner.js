import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../../styles/styledHeaderTheme'

const VideoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fa;
  width: 100%;
`

const Header = styled.h1`
  color: ${styledHeaderTheme.colors.black};
  font-family: ${props => props.theme.fonts.nettoBold};
  font-size: calc(16px + 1.5vw);
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      margin-top: 20px;
    }
  }
`

const FloatingContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 75vw;
  height: 45vh;
  max-width: 720px;
  max-height: 432px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      height: 25vh;
    }
  }
`

const VideoBanner = () => (
  <VideoSection>
    <Header>FUSION ALLIANCE TRANSFORMS BUSINESS</Header>
    <FloatingContainer>
      <iframe
        src="https://www.youtube.com/embed/wEwEVeiSCZQ?rel=0&amp;showinfo=0"
        frameBorder="0"
        allowFullScreen
      />
    </FloatingContainer>
  </VideoSection>
)

export default VideoBanner
