import React, { FC } from 'react'
import Modal from '../../components/Modal'
import Privacy from '../Privacy'
import Cookies from '../Cookies'
import Tabs from '../../components/Tabs'
import { BaseProps } from '../../models'

export interface Props extends BaseProps {
  onClose: () => void
}

const PolicyModal: FC<Props> = ({ isHidden, onClose }) => {
  if (isHidden) return null
  return (
    <Modal onClose={onClose}>
      <Tabs.Container>
        <Tabs.Item title="Privacy">
          <Privacy />
        </Tabs.Item>
        <Tabs.Item title="Cookies">
          <Cookies />
        </Tabs.Item>
      </Tabs.Container>
    </Modal>
  )
}

export default PolicyModal
