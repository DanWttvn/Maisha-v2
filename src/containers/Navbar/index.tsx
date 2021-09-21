import React, { useState, FC, useContext } from 'react'
import NavItem from '../../components/NavItem'
import ScrollLink from '../../components/ScrollLink'
import Link from '../../components/Link'
import Image from '../../components/Image'
import LanguageContext from '../../contexts/language'
import { urls } from '../../routes'
import { BaseProps, sectionsData } from '../../models'
import Styled, { Hamburger, Cross, ItemsWrapper, Menu, Backdrop } from './styles'

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
      <ScrollLink to="header" offset={0} isHidden={!isHomePage}>
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </ScrollLink>
      <Link href={urls.root} isHidden={isHomePage} target="">
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </Link>

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
