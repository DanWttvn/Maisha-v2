import React, { FC, useContext, useState } from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import ScrollLink from '../../components/ScrollLink'
import Text from '../../components/Text'
import LanguageContext from '../../contexts/language'
import { BaseProps } from '../../models'
import { urls } from '../../routes'
import theme from '../../styles/theme'
import NewsletterForm from '../NewsletterForm'
import PolicyModal from '../PolicyModal'
import Styled, { InnerContainer, Link, HorizontalDivider, VerticalDivider, Section } from './styles'

export interface Props extends BaseProps {
  isHomePage?: boolean
}

//! hacer un scroll link y link en estos styles para ponerles sus hovers
//! traducir

const Footer: FC<Props> = ({ isHomePage, className, styles }) => {
  const { lang, setLang } = useContext(LanguageContext)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)

  return (
    <Styled className={className} styles={styles}>
      <InnerContainer>
        <Section>
          {isHomePage
            ? <>
              <ScrollLink to="about">
                {lang === 'ES' && 'Quiénes somos'}
                {lang === 'EN' && 'Who we are'}
                {lang === 'SW' && 'Sisi ni nani'}
              </ScrollLink>
              <HorizontalDivider />
              <ScrollLink to="donate">
                {lang === 'ES' && 'Dona'}
                {lang === 'EN' && 'Donate'}
                {lang === 'SW' && 'Changia'}
              </ScrollLink>
              <HorizontalDivider />
              <ScrollLink to="collaborate">
                {lang === 'ES' && 'Colabora'}
                {lang === 'EN' && 'Collaborate'}
                {lang === 'SW' && 'Shiriki'}
              </ScrollLink>
            </> : <>
              <Link size="xs" color="offOrange" href={`${urls.root}#about`}>
                {lang === 'ES' && 'Quiénes somos'}
                {lang === 'EN' && 'Who we are'}
                {lang === 'SW' && 'Sisi ni nani'}
              </Link>
              <HorizontalDivider />
              <Link size="xs" color="offOrange" href={`${urls.root}#donate`}>
                {lang === 'ES' && 'Dona'}
                {lang === 'EN' && 'Donate'}
                {lang === 'SW' && 'Changia'}
              </Link>
              <HorizontalDivider />
              <Link size="xs" color="offOrange" href={`${urls.root}#collaborate`}>
                {lang === 'ES' && 'Colabora'}
                {lang === 'EN' && 'Collaborate'}
                {lang === 'SW' && 'Shiriki'}
              </Link>
            </>
          }
        </Section>
        <Section>
          <NewsletterForm />
        </Section>
        <Section>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>Síguenos</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <Link variant="B" size="xs" href="https://www.facebook.com/maisharoots/" color="offOrange">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-facebook-square"></i>
            </Link>
            <Link size="xs" href="https://www.instagram.com/maisharoots/" color="offOrange">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-instagram"></i>
            </Link>
            <Link size="xs" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg" color="offOrange">
              <i style={{ fontSize: '1.5rem' }} className="fab fa-youtube"></i>
            </Link>
          </Container>
          <Link size="xs" href="mailto:info@maisharoots.org" color="offOrange">info@maisharoots.org</Link>
        </Section>
        <Section>
          <Text size="s" weight="bold" color="offOrange" styles={{ marginBottom: 15, textAlign: 'center' }} isFullWidth>Languages</Text>
          <Container styles={{ marginBottom: 15, alignItems: 'center' }} isFullWidth>
            <Button variant="D" onClick={setLang?.bind(undefined, 'ES')}>ESP</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'EN')}>ENG</Button>
            <VerticalDivider />
            <Button variant="D" onClick={setLang?.bind(undefined, 'SW')}>SWA</Button>
          </Container>
          <Text size="s" color="offOrange" onClick={setIsPolicyModalOpen.bind(undefined, true)} styles={{ textDecoration: 'underline', marginLeft: 8, cursor: 'pointer' }}>
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
