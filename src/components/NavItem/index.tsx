import React, { useState, FC } from 'react'
import { BaseProps } from '../../models'
import { Li, SubItemsWrapper, Link } from './styles'

export interface Props extends BaseProps {
  subItemsData?: { name: string, section: string }[]
  sectionId: string
  onClick?: () => void
  onOpen: (isShown: boolean) => void
}

const NavItem: FC<Props> = ({ children, subItemsData, sectionId, onClick, onOpen }) => {
  const [ showSub, setShowSub ] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Li key={i} isSubItem>
      <Link to={x.section} activeClass="active" spy={true} smooth={true} offset={-90}>{x.name}</Link>
    </Li>
  ))

  const handleToggle = (isShown: boolean) => {
    if (!subItemsData) return
    setShowSub(isShown)
    onOpen(isShown)
  }

  return (
    <Li onMouseEnter={handleToggle.bind(undefined, true)} onMouseLeave={handleToggle.bind(undefined, false)}>
      <Link to={sectionId} spy={true} smooth={true} offset={-90} activeClass="active">{children}</Link>
      <SubItemsWrapper isOpen={showSub}>{subItems}</SubItemsWrapper>
    </Li>
  )
}

export default NavItem

