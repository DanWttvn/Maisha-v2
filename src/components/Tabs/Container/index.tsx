import React, { Children, cloneElement, FC, ReactElement, useState } from 'react'
import { BaseProps } from '../../../models'
import Styled, { TabBar, TabButton } from './styles'
import { Props as ItemProps } from '../Item'

export type Props = BaseProps

const Tabs: FC<Props> = ({ isHidden, styles, children, isStreched }) => {
  const [ value, setValue ] = useState(0)
  let tabs: ReactElement[] = []
  let content: ReactElement[] = []

  const handleClick = (index: number, event: Event): void => {
    setValue(index)
    event.preventDefault()
  }

  Children.forEach(children, (x: ReactElement<ItemProps>, i) => {
    const tabButton = <TabButton key={i} onClick={handleClick.bind(undefined, i)} isActive={value === i}>{x.props.title}</TabButton>
    const tabContent = cloneElement(x, { isHidden: value !== i, key: i })

    tabs = [ ...tabs, tabButton ]
    content = [ ...content, tabContent ]
  })

  if (isHidden) return null

  return (
    <Styled styles={styles} isStreched={isStreched}>
      <TabBar>{tabs}</TabBar>
      {content}
    </Styled>
  )
}

Tabs.displayName = 'Tabs'

export default Tabs
