import React, { FC, useState } from 'react'
import { Language } from '../models'

export interface LanguageContext {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = React.createContext<LanguageContext>({
  lang: 'ES',
  setLang: () => undefined
})

export const LanguageContextProvider: FC = ({ children }) => {
  const [ lang, setLang ] = useState<Language>('ES')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
