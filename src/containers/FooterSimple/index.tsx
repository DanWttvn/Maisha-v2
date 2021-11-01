import React, { FC } from 'react'
import Container from '../../components/Container'
import ExternalLink from '../../components/ExternalLink'
import Image from '../../components/Image'
import Text from '../../components/Text'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Styled, { InnerContainer, HorizontalDivider } from '../Footer/styles'

export type Props = BaseProps

const FooterSimple: FC<Props> = ({ styles }) => {
  return (
    <Styled styles={styles}>
      <InnerContainer>
        <Container styles={{ justifyContent: 'space-between', maxWidth: 200, }}>
          <ExternalLink size="s" href="https://maisharoots.org/#about" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>Quiénes somos</ExternalLink>
          <HorizontalDivider />
          <ExternalLink size="s" href="https://maisharoots.org/#donate" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>Dona</ExternalLink>
          <HorizontalDivider />
          <ExternalLink size="s" href="https://maisharoots.org/#collaborate" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>Hazte voluntaria/o</ExternalLink>
        </Container>
        <ExternalLink href="https://maisharoots.org/">
          <Image src="/images/MR-orange.png" styles={{ width: 100, height: 100 }} />
        </ExternalLink>
        <Container styles={{ padding: '0 10px', maxWidth: 200 }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <ExternalLink size="s" href="https://www.facebook.com/maisharoots/" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-facebook-square"></i>
            </ExternalLink>
            <ExternalLink size="s" href="https://www.instagram.com/maisharoots/" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-instagram"></i>
            </ExternalLink>
            <ExternalLink size="s" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-youtube"></i>
            </ExternalLink>
          </Container>
          <ExternalLink size="s" href="mailto:info@maisharoots.org" styles={{ color: theme.colors.offOrange, textDecoration: 'none' }}>info@maisharoots.org</ExternalLink>
        </Container>
        <Text styles={{ fontSize: 11, color: '#ccc' }} isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Text>
      </InnerContainer>
    </Styled>
  )
}

export default FooterSimple