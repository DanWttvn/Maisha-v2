import React, { FC } from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Text from '../../components/Text'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Styled, { InnerContainer, Link, HorizontalDivider } from '../Footer/styles'

export type Props = BaseProps

const FooterSimple: FC<Props> = ({ styles }) => {
  return (
    <Styled styles={styles}>
      <InnerContainer>
        <Container styles={{ justifyContent: 'space-between', maxWidth: 200, }}>
          <Link size="s" href="https://maisharoots.org/#about" styles={{ color: theme.colors.offOrange }}>Quiénes somos</Link>
          <HorizontalDivider />
          <Link size="s" href="https://maisharoots.org/#donate" styles={{ color: theme.colors.offOrange }}>Dona</Link>
          <HorizontalDivider />
          <Link size="s" href="https://maisharoots.org/#collaborate" styles={{ color: theme.colors.offOrange }}>Hazte voluntaria/o</Link>
        </Container>
        <Link href="https://maisharoots.org/">
          <Image src="/images/MR-orange.png" styles={{ width: 100, height: 100 }} />
        </Link>
        <Container styles={{ padding: '0 10px', maxWidth: 200 }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <Link size="s" href="https://www.facebook.com/maisharoots/" styles={{ color: theme.colors.offOrange }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-facebook-square"></i>
            </Link>
            <Link size="s" href="https://www.instagram.com/maisharoots/" styles={{ color: theme.colors.offOrange }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-instagram"></i>
            </Link>
            <Link size="s" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg" styles={{ color: theme.colors.offOrange }}>
              <i style={{ fontSize: '1.5rem' }} className="fab fa-youtube"></i>
            </Link>
          </Container>
          <Link size="s" href="mailto:info@maisharoots.org" styles={{ color: theme.colors.offOrange }}>info@maisharoots.org</Link>
        </Container>
        <Text styles={{ fontSize: 11, color: '#ccc' }} isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Text>
      </InnerContainer>
    </Styled>
  )
}

export default FooterSimple
