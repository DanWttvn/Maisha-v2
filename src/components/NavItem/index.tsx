import React, { useState, FC } from 'react'
import { BaseProps, SectionTitle, SubSectionTitle } from '../../models'
import { Li, SubItemsWrapper, ScrollLink } from './styles'

export interface Props extends BaseProps {
  subItemsData?: { name: string, section: SubSectionTitle }[]
  sectionId: SectionTitle
  onClick?: () => void
  onOpen: (isShown: boolean) => void
}

const NavItem: FC<Props> = ({ children, subItemsData, sectionId, onClick, onOpen }) => {
  const [ showSub, setShowSub ] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Li key={i} isSubItem>
      <ScrollLink to={x.section}>{x.name}</ScrollLink>
    </Li>
  ))

  const handleToggle = (isShown: boolean) => {
    if (!subItemsData) return
    setShowSub(isShown)
    onOpen(isShown)
  }

  return (
    <Li onMouseEnter={handleToggle.bind(undefined, true)} onMouseLeave={handleToggle.bind(undefined, false)}>
      <ScrollLink to={sectionId}>{children}</ScrollLink>
      <SubItemsWrapper isOpen={showSub}>{subItems}</SubItemsWrapper>
    </Li>
  )
}

export default NavItem

