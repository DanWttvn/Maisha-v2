import React, { FC, useState } from 'react'
import { BaseProps } from '../../models'
import Button from '../../components/Button'
import Text from '../../components/Text'
import SkipWrap from '../../components/SkipWrap'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useForm } from 'react-hook-form'
import Styled, { InputText } from './styles'
import { format } from 'date-fns'
import { isEmailValid, isBankAccountValid } from '../../helpers/form'
import theme from '../../styles/theme'
import PolicyModal from '../PolicyModal'

export interface Props extends BaseProps {
  amountSelected: number
  variant: '1' | '2'
}

type FormData = {
  name: string
  dni: string
  email: string
  CP: string
  IBAN: string
}

const Form: FC<Props> = ({ amountSelected, variant, isHidden, styles }) => {
  const [ errors, setErrors ] = useState<string[]>([])
  const { register, handleSubmit } = useForm()
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState<boolean>(false)
  const [ isSending, setIsSending ] = useState<boolean>(false)

  if (isHidden) return null

  const handleFormSubmit = (formData: FormData) => {
    const data = {
      ...formData,
      amount: amountSelected,
      date: format(new Date(), 'dd/MM/yyyy')
    }

    let nextErrors: string[] = []

    if (!isEmailValid(data.email)) nextErrors = [ ...nextErrors, 'email' ]
    if (!isBankAccountValid(data.IBAN)) nextErrors = [ ...nextErrors, 'IBAN' ]

    if (nextErrors.length) return setErrors(nextErrors)

    setIsSending(true)

    const url = variant === '1' ? `${process.env.REACT_APP_SPREADSHEET1}` : `${process.env.REACT_APP_SPREADSHEET2}`


    fetch(url, {
      method: 'post',
      body: JSON.stringify({ 'data': data }),
    }).then(res => {
      console.log('4', res)
      if (res.status === 201 || res.status === 200) {
        (window as any).Email.send({
          SecureToken: `${process.env.REACT_APP_SMPT_TOKEN}`,
          //! poner maisba
          To : [ `${process.env.REACT_APP_EMAIL1}` ],
          From : 'info@maisharoots.org',
          Subject : 'Nuevo socio!',
          //! quitar 'ESTO ES...
          Body : `
            ESTO ES UNA PRUEBA DE DANIELA PARA LA LANDING
            Nuevo socio desde la Landing !
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
        }).then((message: string) => {
          console.log('sent!', message)
          window.location.href = 'https://maisharoots.org/donate-success'
        }).catch((err: Error) => console.error(err))
      } else {
        setIsSending(false)
        // formMsg.innerHTML = '<span class="form-msg">Ha ocurrido un error, por favor, vuelve a intentarlo más tarde</span>';
        console.error(res)
      }
    }).catch(err => console.error(err))
  }

  const label = (
    <>
      <Text size="xs" styles={{ marginRight: 6 }}>He leído y acepto la</Text>
      <Text size="xs" onClick={setIsPolicyModalOpen.bind(undefined, true)} styles={{ textDecoration: 'underline' }}>Política de Privacidad</Text>
    </>
  )

  return (
    <>
      <Styled onSubmit={handleSubmit(handleFormSubmit)} styles={styles}>
        {/* //! hacer esto un tema o algo del Input */}
        <InputText
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre y Apellidos"
          name="name"
          autoComplete="name"
          InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
          inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
          inputRef={register}
        />
        <InputText
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="dni"
          label="DNI/Pasaporte"
          name="dni"
          autoComplete="dni"
          InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
          inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
          inputRef={register}
        />
        <InputText
          variant="standard"
          margin="normal"
          required
          fullWidth
          error={errors.includes('email')}
          helperText={errors.includes('email') ? 'Por favor, incluye un email válido' : ''}
          id="email"
          label="Correo Electrónico"
          name="email"
          type="email"
          autoComplete="email"
          InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
          inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
          inputRef={register}
        />
        <InputText
          variant="standard"
          margin="normal"
          required
          fullWidth
          type="number"
          id="CP"
          label="Código Postal"
          name="CP"
          autoComplete="CP"
          InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
          inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
          inputRef={register}
        />
        <InputText
          variant="standard"
          margin="normal"
          required
          fullWidth
          error={errors.includes('IBAN')}
          id="IBAN"
          label="Cuenta Bancaria"
          name="IBAN"
          autoComplete="IBAN"
          InputLabelProps={{ style: { fontFamily: theme.fonts.main } }}
          inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
          helperText="Recuerda que debes añadir el IBAN (Ej.: ES1212341234110123456789)"
          inputRef={register}
        />
        <FormControlLabel
          control={<Checkbox inputRef={register} name="privacy" defaultChecked={false} color="primary" required/>}
          label={label}
          style={{ fontFamily: theme.fonts.main }}
        />
        <SkipWrap/>
        <Button type="submit" isLoading={isSending} styles={{ margin: '0 auto' }}>Enviar</Button>
      </Styled>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={setIsPolicyModalOpen.bind(undefined, false)} />
    </>
  )
}

export default Form
