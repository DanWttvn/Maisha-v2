import React, { FC } from 'react'
import Text from '../../components/Text'
import Container from '../../components/Container'
import { BaseProps } from '../../models'
import { Arrow, EmailInput, Form, Button } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const NewsletterForm: FC<Props> = () => (
  <Container>
    <Text color="offOrange" size="s">Subscribete a nuestra newsletter y no te pierdas ninguna novedad!</Text>
    <Form action={`${process.env.REACT_APP_SUBSCRIBE_MAILCHIMP}`} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" >
      <EmailInput placeholder="introduce tu email..." type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
      <Button variant="B">
        <Arrow size="20" />
        <input type="submit" name="subscribe" value="" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, inset: 0 }} />
      </Button>
      <div id="mce-responses" className="clear">
        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
      </div>
    </Form>
  </Container>
)

export default NewsletterForm
