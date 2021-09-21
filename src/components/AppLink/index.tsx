import React, { FC } from 'react'
import { TextProps, SectionTitle, SubSectionTitle } from '../../models'
import { urls } from '../../routes'
import { ScrollLink, HashLink, RouteLink } from './styles'

export interface Props extends TextProps {
  toPage?: string
  toSection?: SectionTitle | SubSectionTitle
  variant?: 'menu' | 'footer' | 'app'
  isSamePage?: boolean
}

const AppLink: FC<Props> = ({ children, toPage, toSection, className, onClick, size, weight, variant = 'app', isSamePage, isHidden }) => {
  if (isHidden) return null

  if (isSamePage) return <ScrollLink to={toSection} onClick={onClick} variant={variant} size={size} weight={weight} activeClass="active" spy={true} smooth={true} className={className}>{children}</ScrollLink>

  if (!!toSection) return <HashLink to={`${urls.root}#${toSection}`} onClick={onClick} variant={variant} size={size} weight={weight}>{children}</HashLink>

  return <RouteLink to={`${toPage}`} onClick={onClick} variant={variant} size={size} weight={weight}>{children}</RouteLink>
}

export default AppLink
