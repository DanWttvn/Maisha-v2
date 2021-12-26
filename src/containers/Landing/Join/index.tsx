import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import Container from '../../../components/Container'
import Dialog from '../../../components/Dialog'
import Subtitle from '../../../components/Subtitle'
import Text from '../../../components/Text'
import JoinForm from '../../../containers/JoinForm'
import SkipWrap from '../../../components/SkipWrap'
import Banner from '../../../components/Banner'
import useIntersection from '../../../hooks/useIntersection'
import { handleScrollToTop } from '../../../helpers/screen'
import Styled, { Input, HelperText, JoinButton } from './styles'

type Props = {
  variant: '1' | '2'
}

const Join: FC<Props> = ({ variant }) => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>()
  const [ customAmount, setCustomAmount ] = useState(0)
  const [ isFormModalOpen, setIsFormModalOpen ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const [ isSmallerThanMin, setIsSmallerThanMin ] = useState(false)
  const [ isCTAVisible, setIsCTAVisible ] = useState(true)
  const { isNear, elementRef } = useIntersection(false, '350px', true)

  useEffect(() => {
    setIsCTAVisible(isNear)
  }, [ isNear ])

  const handleSelectAmount = (value: string) => {
    setSelectedAmount(Number(value))
    if (value !== '0') setIsError(false)
  }

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    handleSelectAmount(value)
    setIsSmallerThanMin(false)
  }

  const handleOpenForm = () => {
    if (!selectedAmount || selectedAmount === 0) return setIsError(true)
    if (selectedAmount < 5) return setIsSmallerThanMin(true)
    setIsError(false)
    setIsFormModalOpen(true)
  }

  //TODO: add recaptcha

  return (
    <>
      <Styled direction="vertical">
        <Container styles={{ justifyContent: 'center' }}>
          <Button onClick={handleSelectAmount.bind(undefined, 5)} isSelected={selectedAmount === 5 && customAmount !== 5} variant="C">5€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 10)} isSelected={selectedAmount === 10 && customAmount !== 10} variant="C">10€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 15)} isSelected={selectedAmount === 15 && customAmount !== 15} variant="C">15€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 25)} isSelected={selectedAmount === 25 && customAmount !== 25} variant="C">25€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} variant="C">
            <Input type="number" min={5} onChange={handleInputChange}/>€
          </Button>
        </Container>
        <HelperText isHidden={isError} color="black" weight="semibold" isFullWidth>Elige tu aportación mensual</HelperText>
        <HelperText isHidden={selectedAmount !== 5} color="black" size="s" isFullWidth>*Para evitar comisiones del banco y sacar el máximo provecho a tu aportación, retiraremos cada dos meses 10€ de tu cuenta</HelperText>
        <SkipWrap />
        <HelperText isHidden={!isError} color="brightRed" weight="black" isFullWidth>*Por favor, selecciona una cantidad mensual</HelperText>
        <HelperText isHidden={!isSmallerThanMin} color="brightRed" weight="black" isFullWidth>*La cantidad mínima es de 5€</HelperText>
      </Styled>

      <SkipWrap />
      <JoinButton variant="B" onClick={handleOpenForm} ref={elementRef}>HAZTE SOCIA/O</JoinButton>
      <SkipWrap />

      <Dialog isHidden={!isFormModalOpen} onClose={setIsFormModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socia/o</Subtitle>
        <Text color="black" weight="semibold" styles={{ marginRight: 8 }}>Tu aportación mensual seleccionada es de <strong>{selectedAmount}</strong>€.</Text>
        <Text size="s" color="lightGrey" onClick={setIsFormModalOpen.bind(undefined, false)} styles={{ textDecoration: 'underline', cursor: 'pointer', marginTop: 2 }}>Cambiar</Text>
        <SkipWrap />
        <JoinForm selectedAmount={selectedAmount || 0} variant={variant} />
      </Dialog>

      <Banner variant="B" isShown={!isCTAVisible} styles={{ padding: '20px 20%', alignItems: 'center' }}>
        <Text color="black" weight="semibold">Ayúdanos a seguir creciendo!</Text>
        <Button variant="B" onClick={handleScrollToTop} styles={{ marginLeft: 'auto' }}>ÚNETE</Button>
      </Banner>
    </>
  )
}
export default Join