import React, { FC, useState } from 'react'
import Container from '../../../components/Container'
import ExternalLink from '../../../components/ExternalLink'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import { BaseProps } from '../../../models'
import theme from '../../../styles/theme'
import Styled, { InnerContainer, HorizontalDivider, FacebookIcon, InstagramIcon, Section, YoutubeIcon } from '../../Footer/styles'
import PolicyModal from '../../PolicyModal'

export type Props = BaseProps
//! cuando despliegue la v2, meter el footer normal

const Footer: FC<Props> = ({ styles }) => {
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)

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
        <Section styles={{ padding: '0 10px', maxWidth: 200 }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <ExternalLink variant="footer" size="xs" href="https://www.facebook.com/maisharoots/">
              <FacebookIcon />
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.instagram.com/maisharoots/">
              <InstagramIcon />
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg">
              <YoutubeIcon />
            </ExternalLink>
          </Container>
          <ExternalLink variant="footer" size="xs" href="mailto:info@maisharoots.org">info@maisharoots.org</ExternalLink>
        </Section>
      </InnerContainer>
      <Text styles={{ fontSize: 11, color: '#ccc', marginTop: 12 }} isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Text>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={setIsPolicyModalOpen.bind(undefined, false)} />
    </Styled>
  )
}

export default Footer