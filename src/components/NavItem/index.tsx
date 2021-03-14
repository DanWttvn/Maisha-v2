import React, { useState, FC } from 'react'
import Styled, { SubItemsWrapper } from './styles'
import { Link } from 'react-router-dom'
import { BaseProps } from '../../models'

export interface Props extends BaseProps {
  subItemsData: { name: string, url: string }[]
  isActive?: boolean
  sectionId: string
  onClick?: any
}

const NavItem: FC<Props> = ({ children, subItemsData, isActive, sectionId, onClick }) => {
  const [showSub, setShowSub] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Link to={x.url} key={i} style={{ textDecoration: 'none' }}>
      <Styled >{x.name}</Styled>
    </Link>
  ))

  return (
    <Link to={`/#${sectionId}`} style={{ textDecoration: 'none' }}>
      <Styled
        isActive={isActive}
        onClick={onClick}
        onMouseEnter={() => setShowSub(true)}
        onMouseLeave={() => setShowSub(false)}
      >
        {children}
        <SubItemsWrapper isOpen={showSub}>
          {subItems}
        </SubItemsWrapper>   
      </Styled>
    </Link>
  )
}

export default NavItem

