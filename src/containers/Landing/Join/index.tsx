import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Dialog from '../../../components/Dialog'
import Subtitle from '../../../components/Subtitle'
import Text from '../../../components/Text'
import JoinForm from '../../../containers/JoinForm'
import defaultTheme from '../../../styles/theme'
import SkipWrap from '../../../components/SkipWrap'
import theme from '../../../styles/theme'
import Banner from '../../../components/Banner'
import useIntersection from '../../../hooks/useIntersection'
import { handleScrollToTop } from '../../../helpers/screen'

const Join: FC = () => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>()
  const [ customAmount, setCustomAmount ] = useState<number>(0)
  const [ isFormModalOpen, setIsFormModalOpen ] = useState<boolean>(false)
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ isCTAVisible, setIsCTAVisible ] = useState(true)
  const { isNear, elementRef } = useIntersection(false, '350px')

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
  }

  const handleOpenForm = () => {
    if (!selectedAmount || selectedAmount === 0) return setIsError(true)
    setIsError(false)
    setIsFormModalOpen(true)
  }

  return (
    <>
      <Container direction="vertical" styles={{ margin: '-80px auto 24px', zIndex: defaultTheme.zIndex.medium }}>
        <Container>
          <Button onClick={handleSelectAmount.bind(undefined, 5)} isSelected={selectedAmount === 5 && customAmount !== 5} variant="C">5€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 10)} isSelected={selectedAmount === 10 && customAmount !== 10} variant="C">10€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 15)} isSelected={selectedAmount === 15 && customAmount !== 15} variant="C">15€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, 25)} isSelected={selectedAmount === 25 && customAmount !== 25} variant="C">25€</Button>
          <Button onClick={handleSelectAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} variant="C">
            <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }} />€
          </Button>
        </Container>
        <Text isHidden={isError} color="black" weight="semibold" isFullWidth>Elige tu aportación mensual</Text>
        <Text isHidden={!isError} color="brightRed" weight="black" isFullWidth>*Por favor, selecciona una cantidad mensual</Text>
      </Container>

      <SkipWrap />
      <Button variant="B" onClick={handleOpenForm} ref={elementRef} styles={{ margin: '0 auto', fontSize: 36, fontWeight: 800, borderRadius: 40, padding: '20px 35px', background: theme.colors.offOrange, color: theme.colors.white, border: `${theme.colors.darkRed} 2px solid` }}>HAZTE SOCIA/O</Button>
      <SkipWrap />

      <Dialog isHidden={!isFormModalOpen} onClose={setIsFormModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socia/o</Subtitle>
        <Text color="black" weight="semibold" styles={{ marginRight: 8 }}>Tu aportación mensual seleccionada es de <strong>{selectedAmount}</strong>€.</Text>
        <Text size="s" color="lightGrey" onClick={setIsFormModalOpen.bind(undefined, false)} styles={{ textDecoration: 'underline', cursor: 'pointer', marginTop: 2 }}>Cambiar</Text>
        <JoinForm amountSelected={selectedAmount || 0} />
      </Dialog>

      <Banner variant="B" isShown={!isCTAVisible} styles={{ padding: '20px 20%', alignItems: 'center' }}>
        <Text color="black" weight="semibold">Ayúdanos a seguir creciendo!</Text>
        <Button variant="B" onClick={handleScrollToTop} styles={{ marginLeft: 'auto' }}>ÚNETE</Button>
      </Banner>
    </>
  )
}
export default Join