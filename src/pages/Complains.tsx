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
import Section from '../components/Section'
import SubSection from '../components/SubSection'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'
import Page from '../components/Page'

const Complains: FC = () => {
  const { lang } = useContext(LanguageContext)
  const [ errors, setErrors ] = useState<string[]>([])
  const [ isSending, setIsSending ] = useState(false)
  const [ isSuccessful, setIsSuccesful ] = useState(false)

  const labelCopies: Record<string, LanguageOptions> = {
    complain: {
      ES: 'Acción a denunciar',
      EN: 'Action to report',
      SW: 'Hatua za taarifa'
    },
    date: {
      ES: 'Fecha',
      EN: 'Date',
      SW: 'Tarehe'
    },
    involved: {
      ES: 'Personas Involucradas (de la Asociación y externas a la misma)',
      EN: 'People involved (from the Association and external to it)',
      SW: 'Watu wanaohusika (kutoka kwenye shirika na wa nje)'
    },
    name: {
      ES: 'Nombre y Apellidos',
      EN: 'Full Name',
      SW: 'Jina kamili'
    },
    id: {
      ES: 'DNI/Pasaporte',
      EN: 'ID/Passport',
      SW: 'Kitambulisho / Pasipoti'
    },
    email: {
      ES: 'Correo Electrónico',
      EN: 'Email',
      SW: 'Barua pepe'
    },
    phone: {
      ES: 'Teléfono',
      EN: 'Phone',
      SW: 'Simu'
    },
    relationship: {
      ES: 'Relación con la Asociación Maisha Roots',
      EN: 'Relationship with Maisha Roots Association',
      SW: 'Uhusiano na Maisha Roots Association'
    },
    emailError: {
      ES: 'Por favor, incluye un email válido',
      EN: 'Please, enter a valid email',
      SW: 'Tafadhali, ingiza barua pepe inayotumika'
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
    <Page>
      <Navbar />
      <Section styles={{ minHeight: 'calc(100vh - 254px)' }}>
        <SubSection>
          <Subtitle styles={{ marginTop: 16 }}>
            {lang === 'ES' && 'Denuncias'}
            {lang === 'EN' && 'Complains'}
            {lang === 'SW' && 'Malalamiko'}
          </Subtitle>
          <Form handleSubmit={handleSubmit} isHidden={isSuccessful} styles={{ maxWidth: 1000, margin: '0 auto' }}>
            <Subtitle isCentered isFullWidth isSmall>
              {lang === 'ES' && 'Datos de la denuncia'}
              {lang === 'EN' && 'Information of the complain'}
              {lang === 'SW' && 'Taarifa za mlalamikaji'}
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
              {lang === 'SW' && 'Maelezo ya mawasiliano'}
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
              {lang === 'SW' && <>Kuambatisha faili, unaweza kuituma kwa <ExternalLink href="canaldenuncias@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
            </Paragraph>
            <Text color="brightRed" weight="bold" styles={{ marginBottom: 32 }} isHidden={!errors.includes('fail')} isFullWidth>
              {lang === 'ES' && 'Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía un email a info@maisharoots.org'}
              {lang === 'EN' && 'An error has occurred, please try again later or send an email to info@maisharoots.org'}
              {lang === 'SW' && 'Hitilafu imetokea, tafadhali jaribu tena baadaye au tuma barua pepe kwa info@maisharoots.org'}
            </Text>
            <Button type="submit" isLoading={isSending} styles={{ margin: '0 auto' }}>
              {lang === 'ES' && 'Enviar'}
              {lang === 'EN' && 'Send'}
              {lang === 'SW' && 'Tuma'}
            </Button>
          </Form>
          <Text size="l" isHidden={!isSuccessful}>
            {lang === 'ES' && 'Tu denuncia ha sido emitida, nos pondremos pronto en contacto contigo.'}
            {lang === 'EN' && 'Your complaint has been emitted, we will contact you soon.'}
            {lang === 'SW' && 'Malalamiko yako yametolewa, tutawasiliana nawe hivi karibuni.'}
          </Text>
        </SubSection>
      </Section>
      <Footer />
    </Page>
  )
}

export default Complains
