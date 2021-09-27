import React, { FC, useContext, useState } from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Text from '../../components/Text'
import AppLink from '../../components/AppLink'
import LanguageContext from '../../contexts/language'
import { BaseProps } from '../../models'
import theme from '../../styles/theme'
import NewsletterForm from '../NewsletterForm'
import PolicyModal from '../PolicyModal'
import Styled, { InnerContainer, HorizontalDivider, VerticalDivider, Section } from './styles'
import ExternalLink from '../../components/ExternalLink'

export interface Props extends BaseProps {
  isHomePage?: boolean
}

const Footer: FC<Props> = ({ isHomePage, className, styles }) => {
  const { lang, setLang } = useContext(LanguageContext)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)

  return (
    <Styled className={className} styles={styles}>
      <InnerContainer>
        <Section>
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="about">
            {lang === 'ES' && 'Quiénes somos'}
            {lang === 'EN' && 'Who we are'}
            {lang === 'SW' && 'Sisi ni nani'}
          </AppLink>
          <HorizontalDivider />
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="donate">
            {lang === 'ES' && 'Dona'}
            {lang === 'EN' && 'Donate'}
            {lang === 'SW' && 'Changia'}
          </AppLink>
          <HorizontalDivider />
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="collaborate">
            {lang === 'ES' && 'Colabora'}
            {lang === 'EN' && 'Collaborate'}
            {lang === 'SW' && 'Shiriki'}
          </AppLink>
        </Section>
        <Section>
          <NewsletterForm />
        </Section>
        <Section>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <ExternalLink variant="footer" size="xs" href="https://www.facebook.com/maisharoots/">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-facebook-square"></i>
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.instagram.com/maisharoots/">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-instagram"></i>
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-youtube"></i>
            </ExternalLink>
          </Container>
          <ExternalLink variant="footer" size="xs" href="mailto:info@maisharoots.org">info@maisharoots.org</ExternalLink>
        </Section>
        <Section>
          <Text size="s" weight="bold" color="offOrange" styles={{ marginBottom: 15 }} isCentered isFullWidth>Languages</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'center' }} isFullWidth>
            <Button variant="D" onClick={setLang?.bind(undefined, 'ES')}>ESP</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'EN')}>ENG</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'SW')}>SWA</Button>
          </Container>
          <Text size="s" color="offOrange" onClick={setIsPolicyModalOpen.bind(undefined, true)} styles={{ textDecoration: 'underline' }} isCentered isFullWidth>
            {lang === 'ES' && 'Política de Privacidad'}
            {lang === 'EN' && 'Privacy Policy'}
            {/* //! falta */}
            {lang === 'SW' && ''}
          </Text>
        </Section>
        <Text styles={{ fontSize: 11, color: '#ccc', marginTop: 12 }} isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Text>
        <PolicyModal isHidden={!isPolicyModalOpen} onClose={setIsPolicyModalOpen.bind(undefined, false)} />
      </InnerContainer>
    </Styled>
  )
}

export default Footer
