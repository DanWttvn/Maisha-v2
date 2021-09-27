import React, { useState, FC, useContext } from 'react'
import NavItem from '../../components/NavItem'
import { Li } from '../../components/NavItem/styles'
import Image from '../../components/Image'
import Container from '../../components/Container'
import LanguageContext from '../../contexts/language'
import { BaseProps, sectionsData } from '../../models'
import Styled, { Hamburger, Cross, ItemsWrapper, Menu, Backdrop } from './styles'
import AppLink from '../../components/AppLink'
import { VerticalDivider } from '../Footer/styles'

interface Props extends BaseProps {
  isHomePage?: boolean
}

export const Navbar: FC<Props> = ({ isHomePage }) => {
  const { lang, setLang } = useContext(LanguageContext)
  const [ isDesktopOpen, setIsDesktopOpen ] = useState(false)
  const [ isResponsiveOpen, setIsResponsiveOpen ] = useState(false)

  const handleOpen = (isOpen: boolean) => {
    setIsDesktopOpen(isOpen)
  }

  const handleClick = () => {
    if (isResponsiveOpen) setIsResponsiveOpen(false)
  }

  const items = sectionsData.map(section => {
    const subItems = section.subsections?.map(subSection => { return { name: subSection.title[lang], section: subSection.id } })

    return (
      <NavItem
        sectionId={section.id}
        key={section.id}
        subItemsData={subItems}
        onOpen={handleOpen}
        onClick={handleClick}
        isHomePage={isHomePage}
      >
        {section.title[lang]}
      </NavItem>
    )
  })

  return (
    <Styled isOpen={isDesktopOpen}>
      <AppLink toSection="header" isSamePage={isHomePage}>
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </AppLink>

      <Hamburger onClick={setIsResponsiveOpen.bind(undefined, true)}/>

      <ItemsWrapper>
        <Backdrop onClick={setIsResponsiveOpen.bind(undefined, false)} isResponsiveOpen={isResponsiveOpen}/>
        <Cross onClick={setIsResponsiveOpen.bind(undefined, false)} isResponsiveOpen={isResponsiveOpen}/>
        <Menu isResponsiveOpen={isResponsiveOpen}>
          {items}
          <Container>
            <Li onClick={setLang?.bind(undefined, 'ES')} style={{ fontWeight: 500, padding: '20px 10px'}} isSubItem>ESP</Li>
            <VerticalDivider />
            <Li onClick={setLang?.bind(undefined, 'EN')} style={{ fontWeight: 500, padding: '20px 10px'}} isSubItem>ENG</Li>
            <VerticalDivider />
            <Li onClick={setLang?.bind(undefined, 'SW')} style={{ fontWeight: 500, padding: '20px 10px'}} isSubItem>SWA</Li>
          </Container>
        </Menu>
      </ItemsWrapper>
    </Styled>
  )
}

export default Navbar
