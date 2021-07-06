import React, { FC, useContext, useEffect, useState } from 'react'
import Button from '../../components/Button'
import Popup from '../../components/Popup'
import Text from '../../components/Text'
import LanguageContext from '../../contexts/language'
import { checkCookie, setCookie } from '../../helpers/cookies'
import { BaseProps } from '../../models'
import { Arrow, Input } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const NewsletterPopup: FC<Props> = () => {
  const { lang } = useContext(LanguageContext)
  const [ isShown, setIsShown ] = useState(false)

  useEffect(() => {
    if (isShown) return
    const isNewsletterClosed = checkCookie('is_newsletter_closed')
    if (isNewsletterClosed !== 'true') setIsShown(true)
  }, [])

  const handleClose = () => {
    setCookie('is_newsletter_closed', 'true', 1)
  }

  return (
    <Popup isHidden={lang !== 'ES'} isShown={isShown} onClose={handleClose}>
      <Text>Subscribete a nuestra newsletter y no te pierdas ninguna novedad!</Text>
      <form action="https://maisharoots.us18.list-manage.com/subscribe/post?u=623c22dea8f25d5207f3771d0&amp;id=f1a4a17e61" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" >
        <Input placeholder="introduce tu email..." type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <Button variant="B" styles={{ borderRadius: '50%', position: 'relative', height: 'fit-content', width: 'fit-content' }}>
          <Arrow size="25" />
          <input type="submit" name="subscribe" value="" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0 }} />
        </Button>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
      </form>
    </Popup>
  )
}
export default NewsletterPopup
