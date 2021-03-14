import React, { FC, Children, ReactElement, cloneElement, useState, FormEvent, ReactNode, PropsWithChildren, isValidElement, useContext, useEffect } from 'react'
import { FormDraft, BaseProps } from '../../models'
import Button from '../Button'
import Styled, { Actions } from './styles'

export interface Props extends BaseProps {
  draft: FormDraft<any>
  submitLabel: string
  onSubmit: (draft: any) => void
  onCancel?: () => void
}

const Form: FC<Props> = ({ children, submitLabel, onSubmit, onCancel, draft: initialDraft, isHidden, styles }) => {
  const [ draft, setDraft ] = useState<FormDraft<any>>(initialDraft)

  useEffect(() => {
    setDraft(initialDraft)
  }, [initialDraft])

  if (isHidden) return null
//! buscar como hacerlo normal

  return (
    // <Styled onSubmit={handleSubmit} styles={styles}>
    //   {content}
    //   <Actions data-testid={`${testId}-actions`}>
    //     <Button theme="C" onClick={onCancel} styles={{ marginRight: 8 }} isReady={isReady} testId={`${testId}-cancel`}>Cancel</Button>
    //     <Button type="submit" theme="B" isReady={isReady} testId={`${testId}-submit`}>{submitLabel}</Button>
    //   </Actions>
    // </Styled>
    <div>form</div>
  )
}

export default Form
