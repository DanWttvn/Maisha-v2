import React, { FC, useContext } from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Text from '../../components/Text'
import LanguageContext from '../../contexts/language'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import Styled, { InnerContainer, Link, HorizontalDivider, VerticalDivider } from './styles'

export type Props = BaseProps

const Footer: FC<Props> = ({ className, styles }) => {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <Styled className={className} styles={styles}>
      <InnerContainer>
        <Container styles={{ justifyContent: 'space-between', maxWidth: 200, }}>
          <Link size="xs" href="https://maisharoots.org/#about" target="_blank" styles={{ color: theme.colors.offOrange }}>Quiénes somos</Link>
          <HorizontalDivider />
          <Link size="xs" href="https://maisharoots.org/#donate" target="_blank" styles={{ color: theme.colors.offOrange }}>Dona</Link>
          <HorizontalDivider />
          <Link size="xs" href="https://maisharoots.org/#collaborate" target="_blank" styles={{ color: theme.colors.offOrange }}>Hazte voluntaria/o</Link>
        </Container>
        {/* Pending: Newsletter secction */}
        <Container styles={{ padding: '0 10px', maxWidth: 200 }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
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
        <Container styles={{ padding: '0 10px', maxWidth: 180, alignItems: 'flex-start' }}>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15, textAlign: 'center' }} isFullWidth>Languages</Text>
          <Container styles={{ marginBottom: 15, alignItems: 'center' }} isFullWidth>
            <Button variant="D" onClick={setLang?.bind(undefined, 'ES')}>ESP</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'EN')}>ENG</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'SW')}>SWA</Button>
          </Container>
          {/* // política de privacidad */}
        </Container>
        <Text styles={{ fontSize: 11, color: '#ccc' }} isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Text>
      </InnerContainer>
    </Styled>
  )
}

export default Footer
