import React, { useState, FC, useContext } from 'react'
import NavItem from '../../components/NavItem'
import Image from '../../components/Image'
import LanguageContext from '../../contexts/language'
import { BaseProps, sectionsData } from '../../models'
import Styled, { Hamburger, Cross, ItemsWrapper, Menu, Backdrop } from './styles'
import AppLink from '../../components/AppLink'

interface Props extends BaseProps {
  isHomePage?: boolean
}

export const Navbar: FC<Props> = ({ isHomePage }) => {
  const { lang } = useContext(LanguageContext)
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
        <Menu isResponsiveOpen={isResponsiveOpen}>{items}</Menu>
      </ItemsWrapper>
    </Styled>
  )
}

export default Navbar
