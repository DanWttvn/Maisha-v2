import React, { FC } from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Text from '../../components/Text'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Styled, { InnerContainer, Link, HorizontalDivider } from '../Footer/styles'

export type Props = BaseProps

const FooterSimple: FC<Props> = () => {
  return (
    <Styled>
      <InnerContainer>
        <Container styles={{ justifyContent: 'space-between', maxWidth: 200, }}>
          <Link size="xs" href="https://maisharoots.org/#about" target="_blank" styles={{ color: theme.colors.offOrange }}>Quiénes somos</Link>
          <HorizontalDivider />
          <Link size="xs" href="https://maisharoots.org/#donate" target="_blank" styles={{ color: theme.colors.offOrange }}>Dona</Link>
          <HorizontalDivider />
          <Link size="xs" href="https://maisharoots.org/#collaborate" target="_blank" styles={{ color: theme.colors.offOrange }}>Hazte voluntaria/o</Link>
        </Container>
        {/* // ponerlo en eun link */}
        <Image src="/images/MR-orange.png" styles={{ width: 100, height: 100 }} />
        <Container styles={{ padding: '0 10px', maxWidth: 200 }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isStreched>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isStreched>
            <Link size="xs" href="https://www.facebook.com/maisharoots/" styles={{ color: theme.colors.offOrange }} target="_blank">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-facebook-square"></i>
            </Link>
            <Link size="xs" href="https://www.instagram.com/maisharoots/" styles={{ color: theme.colors.offOrange }} target="_blank">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-instagram"></i>
            </Link>
            <Link size="xs" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg" styles={{ color: theme.colors.offOrange }} target="_blank">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-youtube"></i>
            </Link>
          </Container>
          <Link size="xs" href="mailto:info@maisharoots.org" styles={{ color: theme.colors.offOrange }} target="_blank">info@maisharoots.org</Link>
        </Container>
        <Text styles={{ fontSize: 11, color: '#ccc' }} isStreched>CIF XXXXX - Registro de Fundaciones de competencia estatal con nº de registro XXX</Text>
      </InnerContainer>
    </Styled>
  )
}

export default FooterSimple
