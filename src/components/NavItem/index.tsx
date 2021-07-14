import React, { useState, FC } from 'react'
import { BaseProps, SectionTitle, SubSectionTitle } from '../../models'
import Link from '../Link'
import { urls } from '../../routes'
import { Li, SubItemsWrapper, ScrollLink } from './styles'

export interface Props extends BaseProps {
  subItemsData?: { name: string, section: SubSectionTitle }[]
  sectionId: SectionTitle
  onClick?: () => void
  onOpen: (isShown: boolean) => void
  isHomePage?: boolean
}

const NavItem: FC<Props> = ({ children, subItemsData, sectionId, onClick, onOpen, isHomePage }) => {
  const [ showSub, setShowSub ] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Li key={i} isSubItem>
      {isHomePage
        ? <ScrollLink to={x.section} onClick={onClick}>{x.name}</ScrollLink>
        : <Link href={`${urls.root}#${x.section}`} target="">{x.name}</Link>
      }
    </Li>
  ))

  const handleToggle = (isShown: boolean) => {
    if (!subItemsData) return
    setShowSub(isShown)
    onOpen(isShown)
  }

  return (
    <Li onMouseEnter={handleToggle.bind(undefined, true)} onMouseLeave={handleToggle.bind(undefined, false)}>
      {isHomePage
        ? <ScrollLink to={sectionId} onClick={onClick}>{children}</ScrollLink>
        : <Link href={`${urls.root}#${sectionId}`} target="">{children}</Link>
      }
      <SubItemsWrapper isOpen={showSub}>{subItems}</SubItemsWrapper>
    </Li>
  )
}

export default NavItem

