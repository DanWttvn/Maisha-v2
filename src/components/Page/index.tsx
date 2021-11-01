import React, { FC, useContext, useEffect } from 'react'
import LanguageContext from '../../contexts/language'
import { getUrlParam } from '../../helpers/url'
import { Language } from '../../models'
import Container from '../Container'


const Page: FC = ({ children }) => {
  const { setLang } = useContext(LanguageContext)

  useEffect(() => {
    const requestedLang = getUrlParam('lang') as Language
    const availableLanguages: Language[] = [ 'ES', 'SW', 'EN' ]

    if (availableLanguages.includes(requestedLang)) setLang(requestedLang)
  }, [])

  return (
    <Container isFullWidth>
      {children}
    </Container>
  )
}

export default Page