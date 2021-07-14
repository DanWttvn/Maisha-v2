import React, { FC } from 'react'
import { SectionTitle, SubSectionTitle, BaseProps } from '../../models'
import { Link } from 'react-scroll'

export interface Props extends BaseProps {
  to: SectionTitle | SubSectionTitle
  offset?: number
  onClick?: () => void
}

const ScrollLink: FC<Props> = ({ children, to, className, onClick, offset = -90, isHidden }) => {
  if (isHidden) return null

  return <Link to={to} onClick={onClick} activeClass="active" spy={true} smooth={true} offset={offset} className={className}>{children}</Link>
}

export default ScrollLink