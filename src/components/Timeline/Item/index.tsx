import React, { FC } from 'react'
import { BaseProps } from '../../../models'
import Text from '../../Text'

export interface Props extends BaseProps {
  bli?: string
}

const Item: FC<Props> = ({ styles }) => {

  return (
    <div>item</div>
  )
}

export default Item
