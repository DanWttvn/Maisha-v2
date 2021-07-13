import React, { FC } from 'react'
import { SectionTitle, SubSectionTitle, BaseProps } from '../../models'
import { Link } from 'react-scroll'

export interface Props extends BaseProps {
  to: SectionTitle | SubSectionTitle
  offset?: number
}

const ScrollLink: FC<Props> = ({ children, to, offset = -90, isHidden }) => {
  if (isHidden) return null

  return <Link to={to} activeClass="active" spy={true} smooth={true} offset={offset}>{children}</Link>
}

export default ScrollLink