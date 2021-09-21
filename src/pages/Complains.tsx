import React, { FC, useState, useContext } from 'react'
import { LanguageOptions } from '../models'
import Button from '../components/Button'
import Text from '../components/Text'
import ExternalLink from '../components/ExternalLink'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import SkipWrap from '../components/SkipWrap'
import InputText from '../components/InputText'
import LanguageContext from '../contexts/language'
import Form from '../components/Form'
import { Section, SubSection } from '../components/Section/styles'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

const Complains: FC = () => {
  const { lang } = useContext(LanguageContext)
  const [ errors, setErrors ] = useState<string[]>([])
  const [ isSending, setIsSending ] = useState(false)
  const [ isSuccessful, setIsSuccesful ] = useState(false)

  //! faltan traducciones
  const labelCopies: Record<string, LanguageOptions> = {
    complain: {
      ES: 'Acción a denunciar',
      EN: 'Action to report',
      SW: ''
    },
    date: {
      ES: 'Fecha',
      EN: 'Date',
      SW: ''
    },
    involved: {
      ES: 'Personas Involucradas (de la Asociación y externas a la misma)',
      EN: 'People involved (from the Association and external to it)',
      SW: ''
    },
    name: {
      ES: 'Nombre y Apellidos',
      EN: 'Full Name',
      SW: ''
    },
    id: {
      ES: 'DNI/Pasaporte',
      EN: 'ID/Passport',
      SW: ''
    },
    email: {
      ES: 'Correo Electrónico',
      EN: 'Email',
      SW: ''
    },
    phone: {
      ES: 'Teléfono',
      EN: 'Phone',
      SW: ''
    },
    relationship: {
      ES: 'Relación con la Asociación Maisha Roots',
      EN: 'Relationship with Maisha Roots Association',
      SW: ''
    },
    emailError: {
      ES: 'Por favor, incluye un email válido',
      EN: 'Please, enter a valid email',
      SW: ''
    }
  }

  const sendEmail = async(data: Record<string, string>) => {
    await (window as any).Email.send({
      SecureToken: `${process.env.REACT_APP_SMPT_TOKEN}`,
      To : [ `${process.env.REACT_APP_EMAIL1}`, `${process.env.REACT_APP_EMAIL2}` ],
      From : 'info@maisharoots.org',
      Subject : 'Nueva Denuncia',
      Body : `
        Se ha realizado una denuncia a través de la web:
        <br>
        <br>
        ${Object.keys(data).map(x => `${x}: ${data[x]} <br>`).join('')}
      `
    }).then(() => setIsSuccesful(true)
    ).catch((err: Error) => {
      setErrors([ ...errors, 'fail' ])
      console.error(err)
    })
  }

  const handleSubmit = async(formData: Record<string, string>) => {
    const nextErrors: string[] = []
    // if (!isEmailValid(formData.email)) nextErrors = [ ...nextErrors, 'email' ]
    if (nextErrors.length) return setErrors(nextErrors)
    
    setIsSending(true)
    await sendEmail(formData)
    setIsSending(false)
  }

  return (
    <>
      <Navbar />
      <Section styles={{ minHeight: 'calc(100vh - 254px)' }}>
        <SubSection>
          <Subtitle styles={{ marginTop: 16 }}>
            {lang === 'ES' && 'Denuncias'}
            {lang === 'EN' && 'Complains'}
            {lang === 'SW' && ''}
          </Subtitle>
          <Form handleSubmit={handleSubmit} isHidden={isSuccessful} styles={{ maxWidth: 1000, margin: '0 auto' }}>
            <Subtitle isCentered isFullWidth isSmall>
              {lang === 'ES' && 'Datos de la denuncia'}
              {lang === 'EN' && 'Information of the complain'}
              {lang === 'SW' && ''}
            </Subtitle>
            <InputText
              label={labelCopies.complain[lang]}
              name="complain"
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.date[lang]}
              name="date"
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.involved[lang]}
              name="involved"
              styles={{ marginBottom: 32 }}
              isRequired
              isFullWidth
            />
            <Subtitle isCentered isFullWidth isSmall>
              {lang === 'ES' && 'Datos de contacto'}
              {lang === 'EN' && 'Contact information'}
              {lang === 'SW' && ''}
            </Subtitle>
            <InputText
              label={labelCopies.name[lang]}
              name="name"
              autocomplete="name"
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.id[lang]}
              name="dni"
              autocomplete="dni"
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.email[lang]}
              name="email"
              type="email"
              autocomplete="email"
              isError={errors.includes('email')}
              helper={errors.includes('email') ? labelCopies.emailError[lang] : ''}
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.phone[lang]}
              name="phone"
              type="number"
              autocomplete="phone"
              isRequired
              isFullWidth
            />
            <InputText
              label={labelCopies.relationship[lang]}
              name="relationship"
              styles={{ marginBottom: 32 }}
              isRequired
              isFullWidth
            />
            <SkipWrap/>
            <Paragraph size="s" styles={{ marginBottom: 32 }} isCentered isFullWidth>
              {lang === 'ES' && <>Para adjuntar algún archivo, puedes enviarlo a <ExternalLink href="canaldenuncias@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
              {lang === 'EN' && <>To attach a file, you can send it to <ExternalLink href="canaldenuncias@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
              {lang === 'SW' && <></>}
            </Paragraph>
            <Text color="brightRed" weight="bold" styles={{ marginBottom: 32 }} isHidden={!errors.includes('fail')} isFullWidth>
              {lang === 'ES' && 'Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía un email a info@maisharoots.org'}
              {lang === 'EN' && 'An error has occurred, please try again later or send an email to info@maisharoots.org'}
              {lang === 'SW' && ''}
            </Text>
            <Button type="submit" isLoading={isSending} styles={{ margin: '0 auto' }}>
              {lang === 'ES' && 'Enviar'}
              {lang === 'EN' && 'Send'}
              {lang === 'SW' && ''}
            </Button>
          </Form>
          <Text size="l" isHidden={!isSuccessful}>
            {lang === 'ES' && 'Tu denuncia ha sido emitida, nos pondremos pronto en contacto contigo.'}
            {lang === 'EN' && 'Your complaint has been emitted, we will contact you soon.'}
            {lang === 'SW' && ''}
          </Text>
        </SubSection>
      </Section>
      <Footer />
    </>
  )
}

export default Complains
