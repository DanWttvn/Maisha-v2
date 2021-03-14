import { FC } from 'react'
import { BaseProps } from '../../models'
import Button from '../Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useForm } from 'react-hook-form'
import Styled, { InputText } from './styles'
import { format } from 'date-fns'

//! posibleemtne mover a container
//! mirar como ponerle un estado de error 

export interface Props extends BaseProps {
  aa?: string
}

const Form: FC<Props> = ({  isHidden, styles }) => {
  const { register, handleSubmit } = useForm()


  if (isHidden) return null

  const handleFormSubmit = (data: any) => {
    console.log(data)

  const { name, dni, email, CP, IBAN, amount } = data


    fetch('https://api.apispreadsheets.com/data/3056/', {
      method: 'post',
      body: JSON.stringify({'data': data }),
    }).then(res => {
      if (res.status === 201 || res.status === 200){
        (window as any).Email.send({
          SecureToken: "31b045c6-3093-457c-b941-429917ab3497",
          To : ['maisharoots@gmail.com', 'danielaw95@gmail.com'],
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
          console.log(message)
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
        autoFocus
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
        autoFocus
        inputRef={register}
      />
      <InputText
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo Electrónico"
        name="email"
        autoComplete="email"
        autoFocus
        inputRef={register}
      />
      <InputText
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="CP"
        label="Código Postal"
        name="CP"
        autoComplete="CP"
        autoFocus
        inputRef={register}
      />
      <InputText
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="IBAN"
        label="Cuenta Bancaria"
        name="IBAN"
        autoComplete="IBAN"
        autoFocus
        helperText="Recuerda que debes añadir el IBAN (Ej.: ES1212341234110123456789)"
        inputRef={register}
      />
      {/* //! añadir link */}
      <FormControlLabel
        control={<Checkbox inputRef={register} name="privacy" defaultChecked={false} color="primary" required/>}
        label="He leído y acepto la Política de Privacidad"
      />
      <Button
        type="submit"
      >
        Enviar
      </Button>
    </Styled>
  )
}

export default Form
