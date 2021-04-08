import { FC, useState } from 'react'
import { BaseProps } from '../../models'
import Button from '../../components/Button'
import Text from '../../components/Text'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useForm } from 'react-hook-form'
import Styled, { InputText } from './styles'
import { format } from 'date-fns'
import { isEmailValid, isBankAccountValid } from '../../helpers/form'
import theme from '../../styles/theme'

//! mirar como ponerle un estado de error 

//* ES20 1465 01 00951715486475

export interface Props extends BaseProps {
  aa?: string
}

const Form: FC<Props> = ({  isHidden, styles }) => {
  const [ errors, setErrors ] = useState<string[]>([])
  const { register, handleSubmit } = useForm()

console.log(errors)
  if (isHidden) return null

  const handleFormSubmit = (data: any) => {
    const { name, dni, email, CP, IBAN, amount } = data

    let nextErrors: string[] = []

    if (!isEmailValid(email)) nextErrors = [ ...nextErrors, 'email']
    if (!isBankAccountValid(IBAN)) nextErrors = [ ...nextErrors, 'IBAN']

    console.log(nextErrors)
    if (nextErrors) return setErrors(nextErrors)


    fetch('https://api.apispreadsheets.com/data/3056/', {
      method: 'post',
      body: JSON.stringify({'data': data }),
    }).then(res => {
      if (res.status === 201 || res.status === 200){
        (window as any).Email.send({
          SecureToken: "31b045c6-3093-457c-b941-429917ab3497",
          // To : ['maisharoots@gmail.com', 'danielaw95@gmail.com'],
          To : [],
          // To : email,
          From : "info@maisharoots.org",
          Subject : "Nuevo socio!",
          Body : `
            ESTO ES UNA PRUEBA DE DANIELA PARA LA LANDING
            Nuevo socio desde la Landing !
            Sus datos:
            <br>
            Nombre: ${name}
            <br>
            DNI: ${dni}
            <br>
            Email: ${email}
            <br>
            Código Postal: ${CP}
            <br>
            IBAN: ${IBAN}
            <br>
            Fecha de alta: ${format(new Date(), 'dd/MM/yyyy')}
            <br>
            Mes de alta: ${new Date().getMonth() + 1}
            <br>
            Dinerito al mes: ${amount}
          `
        }).then((message: any) => {
          console.log('enviado!', message)
        }).catch((err: any) => console.error(err))
      } else {
        // formMsg.innerHTML = '<span class="form-msg">Ha ocurrido un error, por favor, vuelve a intentarlo más tarde</span>';
        console.error(res)
      }
    }).catch(err => console.error(err))
  }

  return (
    <Styled onSubmit={handleSubmit(handleFormSubmit)}>
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
        helperText={errors.includes('email') ? "Por favor, incluye un email válido" : ''}
        id="email"
        label="Correo Electrónico"
        name="email"
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

      {/* //! cambiar font */}
      <FormControlLabel
        control={<Checkbox inputRef={register} name="privacy" defaultChecked={false} color="primary" required/>}
        label="He leído y acepto la Política de Privacidad"
        // inputProps={{ style: { fontFamily: theme.fonts.main, fontWeight: 500 } }}
        style={{ fontFamily: theme.fonts.main }}
      />
      {/* //! añadir link */}
      <Text onClick={() => console.log('ir a privi')}>Política de Privacidad</Text>
      <Button type="submit" >Enviar</Button>
    </Styled>
  )
}

export default Form