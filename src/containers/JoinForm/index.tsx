import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { BaseProps } from '../../models'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Container from '../../components/Container'
import SkipWrap from '../../components/SkipWrap'
import { isEmailValid, isBankAccountValid } from '../../helpers/form'
import theme from '../../styles/theme'
import PolicyModal from '../PolicyModal'
import InputText from '../../components/InputText'
import Form from '../../components/Form'
import { useHistory } from 'react-router'
import { OptionsButton, AmountInput } from './styles'
import { urls } from '../../routes'

export interface Props extends BaseProps {
  selectedAmount: number
  variant: '1' | '2' | '3'
}

type FormData = {
  name: string
  lastName: string
  dni: string
  email: string
  zipCode: string
  IBAN: string
}

const JoinForm: FC<Props> = ({ selectedAmount: forcedAmount, variant, isHidden, styles }) => {
  const { push } = useHistory()
  const [ errors, setErrors ] = useState<string[]>([])
  const [ selectedAmount, setSelectedAmount ] = useState<number | null>(forcedAmount || null)
  const [ customAmount, setCustomAmount ] = useState(0)
  const [ isSmallerThanMin, setIsSmallerThanMin ] = useState(false)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)
  const [ isSending, setIsSending ] = useState(false)
  const { register } = useForm()

  if (isHidden) return null

  const handleSelectAmount = (value: number) => {
    setSelectedAmount(value)
    if (value !== 0) setErrors([])
    setIsSmallerThanMin(false)
  }

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    handleSelectAmount(Number(value))
    setIsSmallerThanMin(false)
    if (value !== '0') setErrors([])
  }

  const sendForm = async (data: FormData) => {
    // Validation
    // TODO: validation with yup
    if (!selectedAmount) return setErrors([ ...errors, 'no-amount' ])
    if (selectedAmount < 5) return setIsSmallerThanMin(true)

    let nextErrors: string[] = []
    if (!isEmailValid(data.email)) nextErrors = [ ...nextErrors, 'email' ]
    if (!isBankAccountValid(data.IBAN)) nextErrors = [ ...nextErrors, 'IBAN' ]
    if (nextErrors.length) return setErrors(nextErrors)

    setIsSending(true)

    // Parse Data
    const parsedData = {
      NOMBRE: data.name,
      APELLIDOS: data.lastName,
      ID: data.dni,
      EMAIL: data.email,
      CODIGO_POSTAL: data.zipCode,
      CUENTA_BANCARIA: data.IBAN,
      APORTACION_MENSUAL: String(selectedAmount || 0)
    }

    const formData = new FormData()
    Object.entries(parsedData).map(([ name, value ]) => formData.append(name, value))

    try {
      await fetch(`${process.env.REACT_APP_JOIN_SENDINBLUE}`, { method: 'POST', body: formData })

      setIsSending(false)
      void push(urls.thanks)
    } catch (error) {
      setIsSending(false)
      setErrors([ ...errors, 'fail' ])
    }
  }

  return (
    <>
      <Form id="sib-form" handleSubmit={sendForm} styles={styles}>
        <InputText
          label="Nombre"
          name="name"
          autocomplete="first-name"
          isRequired
          isFullWidth
        />
        <InputText
          label="Apellidos"
          name="lastName"
          autocomplete="family-name"
          isRequired
          isFullWidth
        />
        <InputText
          label="DNI/Pasaporte"
          name="dni"
          autocomplete="id"
          isRequired
          isFullWidth
        />
        <InputText
          label="Email"
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
          name="zipCode"
          type="number"
          autocomplete="postal-code"
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
            {[ 5, 10, 15, 20, 25 ].map(amount => (
              <OptionsButton
                key={amount}
                onClick={() => handleSelectAmount(amount)}
                isSelected={selectedAmount === amount && customAmount !== amount}
              >
                {amount}€
              </OptionsButton>
            ))}
            <OptionsButton
              onClick={() => handleSelectAmount(customAmount)}
              isSelected={selectedAmount === customAmount}
            >
              <AmountInput type="number" onChange={handleInputChange} />€
            </OptionsButton>
          </Container>

          <Text isHidden={selectedAmount !== 5} color="black" size="s" styles={{ maxWidth: 860 }}>
            *Para evitar comisiones del banco y sacar el máximo provecho a tu aportación, retiraremos cada dos meses 10€ de tu cuenta
          </Text>
          <SkipWrap />
          <Text isHidden={!errors.includes('no-amount')} color="brightRed" weight="black" isFullWidth>
            *Por favor, selecciona una cantidad mensual
          </Text>
          <Text isHidden={!isSmallerThanMin} color="brightRed" weight="black" isFullWidth>
            *La cantidad mínima es de 5€
          </Text>
        </Container>

        <FormControlLabel
          control={<Checkbox inputRef={register} name="privacy" defaultChecked={false} color="primary" required/>}
          label={
            <>
              <Text size="xs" styles={{ marginRight: 6 }}>He leído y acepto la</Text>
              <Text size="xs" onClick={setIsPolicyModalOpen.bind(undefined, true)} styles={{ textDecoration: 'underline' }}>
                Política de Privacidad
              </Text>
            </>
          }
          style={{ fontFamily: theme.fonts.main, marginBottom: 8 }}
        />
        <SkipWrap/>
        <Text color="brightRed" weight="bold" styles={{ marginBottom: 16 }} isHidden={!errors.includes('fail')} isFullWidth>
          Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía un email a info@maisharoots.org
        </Text>
        <Button type="submit" isLoading={isSending} styles={{ margin: '0 auto' }}>
          Enviar
        </Button>
      </Form>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
    </>
  )
}

export default JoinForm
