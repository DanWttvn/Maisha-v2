import React, { FC } from 'react'
import { SectionProps } from '../../models'
import { Section, Image, Icon } from './styles'
import ScrollLink from '../../components/ScrollLink'

const HeroSection: FC<SectionProps> = () => (
  <Section id="header" styles={{ justifyContent: 'center' }}>
    <Image src="/images/Header.png" />
    <ScrollLink to="about">
      <Icon/>
    </ScrollLink>
  </Section>
)

export default HeroSection