import React, { FC } from 'react'
import { TextProps, SectionTitle, SubSectionTitle } from '../../models'
import { urls } from '../../routes'
import { ScrollLink, HashLink, RouteLink } from './styles'

export interface LinkProps extends TextProps {
  variant?: 'menu' | 'footer' | 'app'
}

export interface Props extends LinkProps {
  toPage?: string
  toSection?: SectionTitle | SubSectionTitle
  isSamePage?: boolean
}

const AppLink: FC<Props> = ({ children, toPage, toSection, className, onClick, size = 'inherit', weight = 'bold', variant = 'app', isSamePage, isHidden }) => {
  if (isHidden) return null

  if (isSamePage) return <ScrollLink to={toSection} onClick={onClick} variant={variant} size={size} weight={weight} activeClass="active" spy={true} smooth={true} className={className}>{children}</ScrollLink>

  if (!!toSection) return <HashLink to={`${urls.root}#${toSection}`} onClick={onClick} variant={variant} size={size} weight={weight}>{children}</HashLink>

  return <RouteLink to={`${toPage}`} onClick={onClick} variant={variant} size={size} weight={weight}>{children}</RouteLink>
}

export default AppLink
