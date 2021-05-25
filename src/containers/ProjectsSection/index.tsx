import React, { FC, useContext } from 'react'
import Image from '../../components/Image'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import Text from '../../components/Text'
import Container from '../../components/Container'
import theme from '../../styles/theme'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
// import { StructureCard, GroupCard, GroupsBlock, CommissionIcon } from './styles'

export const ProjectsSection: FC = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section>
      <Title
        firstPart={(lang === 'ES' && 'QUÉ') || (lang === 'EN' && '') || (lang === 'SW' && '') || ''}
        secondPart={(lang === 'ES' && 'HACEMOS') || (lang === 'EN' && '') || (lang === 'SW' && '') || ''}
      />

      <SubSection>
        
      </SubSection>
    </Section>
  )
}

export default ProjectsSection
