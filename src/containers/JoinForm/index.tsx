import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { format } from 'date-fns'
import { BaseProps } from '../../models'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Container from '../../components/Container'
import SkipWrap from '../../components/SkipWrap'
import Input from '../../components/Input'
import { isEmailValid, isBankAccountValid } from '../../helpers/form'
import theme from '../../styles/theme'
import PolicyModal from '../PolicyModal'
import InputText from '../../components/InputText'
import Form from '../../components/Form'
import { useHistory } from 'react-router'

export interface Props extends BaseProps {
  selectedAmount: number
  variant: '1' | '2' | '3'
}

type FormData = {
  name: string
  dni: string
  email: string
  CP: string
  IBAN: string
}

const JoinForm: FC<Props> = ({ selectedAmount: forcedAmount, variant, isHidden, styles }) => {
  const { push } = useHistory()
  const [ errors, setErrors ] = useState<string[]>([])
  const { register } = useForm()
  const [ selectedAmount, setSelectedAmount ] = useState(forcedAmount || null)
  const [ customAmount, setCustomAmount ] = useState(0)
  const [ isSmallerThanMin, setIsSmallerThanMin ] = useState(false)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)
  const [ isSending, setIsSending ] = useState(false)

  if (isHidden) return null

  const handleSelectAmount = (value: string) => {
    setSelectedAmount(Number(value))
    if (value !== '0') setErrors([])
    setIsSmallerThanMin(false)
  }

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    handleSelectAmount(value)
    setIsSmallerThanMin(false)
    if (value !== '0') setErrors([])
  }

  const sendEmail = (data: FormData & { amount: number, date: string }, hasFetchFailed?: boolean, errorInfo?: string) => {
    (window as any).Email.send({
      SecureToken: `${process.env.REACT_APP_SMPT_TOKEN}`,
      To : [ `${process.env.REACT_APP_EMAIL1}`, `${process.env.REACT_APP_EMAIL2}` ],
      From : 'info@maisharoots.org',
      Subject : 'Nuevo socio!',
      Body : `
        ${!!hasFetchFailed ? `¡CUIDADO! Se ha producido un error al intentar meter los datos en el excel. INTRODUCIR A MANO. <br> Error: ${errorInfo}` : ''}
        Nuevo socio desde la Landing variante ${variant} !
        Sus datos:
        <br>
        Nombre: ${data.name}
        <br>
        DNI: ${data.dni}
        <br>
        Email: ${data.email}
        <br>
        Código Postal: ${data.CP}
        <br>
        IBAN: ${data.IBAN}
        <br>
        Fecha de alta: ${data.date}
        <br>
        Mes de alta: ${new Date().getMonth() + 1}
        <br>
        Dinerito al mes: ${data.amount}
      `
    }).then(() => {
      if (variant === '3') push('/thank-you')
      //* here is the conversion pixel change in the future
      else window.location.href = 'https://maisharoots.org/donate-success'
    }
    ).catch((err: Error) => {
      if (hasFetchFailed) return setErrors([ ...errors, 'fail' ])
      setErrors([ ...errors, 'smtpjs' ])
      console.error(err)
      if (variant === '3') push('/thank-you')
      else window.location.href = 'https://maisharoots.org/donate-success'
    })
  }

  const handleSubmit = (formData: FormData) => {
    if (!selectedAmount) return setErrors([ ...errors, 'no-amount' ])
    if (selectedAmount < 5) return setIsSmallerThanMin(true)

    const data = {
      ...formData,
      amount: selectedAmount || 0,
      date: format(new Date(), 'dd/MM/yyyy')
    }

    let nextErrors: string[] = []
    if (!isEmailValid(data.email)) nextErrors = [ ...nextErrors, 'email' ]
    if (!isBankAccountValid(data.IBAN)) nextErrors = [ ...nextErrors, 'IBAN' ]
    if (nextErrors.length) return setErrors(nextErrors)

    setIsSending(true)
    const urls = {
      '1': `${process.env.REACT_APP_SPREADSHEET1}`,
      '2': `${process.env.REACT_APP_SPREADSHEET2}`,
      '3': `${process.env.REACT_APP_SPREADSHEET3}`
    }

    fetch(urls[variant], {
      method: 'post',
      body: JSON.stringify({ 'data': data }),
    }).then(res => {
      if (res.status === 201 || res.status === 200) {
        sendEmail(data)
        setIsSending(false)
      } else {
        sendEmail(data, true, res.toString())
        setIsSending(false)
        console.error(res)
      }
    }).catch(err => {
      sendEmail(data, true, err)
      setIsSending(false)
      console.error(err)
    })
  }

  const label = <>
    <Text size="xs" styles={{ marginRight: 6 }}>He leído y acepto la</Text>
    <Text size="xs" onClick={setIsPolicyModalOpen.bind(undefined, true)} styles={{ textDecoration: 'underline' }}>Política de Privacidad</Text>
  </>

  return (
    <>
      <Form handleSubmit={handleSubmit} styles={styles}>
        <InputText
          label="Nombre y Apellidos"
          name="name"
          autocomplete="name"
          isRequired
          isFullWidth
        />
        <InputText
          label="DNI/Pasaporte"
          name="dni"
          autocomplete="dni"
          isRequired
          isFullWidth
        />
        <InputText
          label="Correo Electrónico"
          name="email"
          type="email"
          autocomplete="email"
          isError={errors.includes('email')}
          helper={errors.includes('email') ? 'Por favor, incluye un email válido' : ''}
          isRequired
          isFullWidth
        />
        <InputText
          label="Código Postal"
          name="CP"
          type="number"
          autocomplete="CP"
          isRequired
          isFullWidth
        />
        <InputText
          label="Cuenta Bancaria"
          name="IBAN"
          autocomplete="IBAN"
          isError={errors.includes('IBAN')}
          helper="Recuerda que debes añadir el IBAN (Ej.: ES1212341234110123456789)"
          styles={{ marginBottom: 32 }}
          isRequired
          isFullWidth
        />

        <Container isHidden={variant !== '3'} styles={{ marginBottom: 16 }} isFullWidth>
          <Container styles={{ margin: '0 auto' }}>
            <Text weight="bold" styles={{ marginBottom: 8 }} isFullWidth>Donación mensual</Text>
            <Button onClick={handleSelectAmount.bind(undefined, 5)} isSelected={selectedAmount === 5 && customAmount !== 5} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>5€</Button>
            <Button onClick={handleSelectAmount.bind(undefined, 10)} isSelected={selectedAmount === 10 && customAmount !== 10} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>10€</Button>
            <Button onClick={handleSelectAmount.bind(undefined, 15)} isSelected={selectedAmount === 15 && customAmount !== 15} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>15€</Button>
            <Button onClick={handleSelectAmount.bind(undefined, 20)} isSelected={selectedAmount === 20 && customAmount !== 20} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>20€</Button>
            <Button onClick={handleSelectAmount.bind(undefined, 25)} isSelected={selectedAmount === 25 && customAmount !== 25} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>25€</Button>
            <Button onClick={handleSelectAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} variant="A" styles={{ margin: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem' }}>
              <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12, fontSize: '1.1rem', width: '50px' }} />€
            </Button>
          </Container>

          <Text isHidden={selectedAmount !== 5} color="black" size="s" styles={{ width: 860 }}>*Para evitar comisiones del banco y sacar el máximo provecho a tu aportación, retiraremos cada dos meses 10€ de tu cuenta</Text>
          <SkipWrap />
          <Text isHidden={!errors.includes('no-amount')} color="brightRed" weight="black" isFullWidth>*Por favor, selecciona una cantidad mensual</Text>
          <Text isHidden={!isSmallerThanMin} color="brightRed" weight="black" isFullWidth>*La cantidad mínima es de 5€</Text>
        </Container>

        <FormControlLabel
          control={<Checkbox inputRef={register} name="privacy" defaultChecked={false} color="primary" required/>}
          label={label}
          style={{ fontFamily: theme.fonts.main, marginBottom: 8 }}
        />
        <SkipWrap/>
        <Text color="brightRed" weight="bold" styles={{ marginBottom: 16 }} isHidden={!errors.includes('fail')} isFullWidth>Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía un email a info@maisharoots.org</Text>
        <Button type="submit" isLoading={isSending} styles={{ margin: '0 auto' }}>Enviar</Button>
      </Form>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={setIsPolicyModalOpen.bind(undefined, false)} />
    </>
  )
}

export default JoinForm
