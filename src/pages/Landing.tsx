import React, { FC, useState } from 'react'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Container from '../components/Container'
import Image from '../components/Image'
import Input from '../components/Input'
import Modal from '../components/Modal'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Video from '../components/Video'
import Tabs from '../components/Tabs'
import JoinForm from '../containers/JoinForm'
import Policy from '../containers/Policy'
import Cookies from '../containers/Cookies'
import defaultTheme from '../styles/theme'

const Landing: FC = () => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>(0)
  const [ customAmount, setCustomAmount ] = useState<number>(0)
  const [ isFormModalOpen, setIsFormModalOpen ] = useState<boolean>(false)
  const [ isPrivacyModalOpen, setIsPrivacyModalOpen ] = useState<boolean>(false)


  const handleInputChange = (value: string | number) => {
    setCustomAmount(Number(value))
    setSelectedAmount(Number(value))
  }
  return (
    <>
      <button onClick={setIsPrivacyModalOpen.bind(undefined, true)}>Privacy</button>
      <Modal isHidden={!isPrivacyModalOpen} onClose={setIsPrivacyModalOpen.bind(undefined, false)}>
        <Tabs.Container>
          <Tabs.Item title="Privacy">
            <Policy />
          </Tabs.Item>
          <Tabs.Item title="Cookies">
            <Cookies />
          </Tabs.Item>
        </Tabs.Container>
      </Modal>



      <Container styles={{ position: 'relative', height: '70vh', maxHeight: 1000, overflow: 'hidden' }} isStreched>
        <Image src="/images/playing_kids.jpg" isStreched/>
        <Text styles={{ position: 'absolute', top: '20%', left: '10%', color: 'white', fontSize: 55, width: '70%', fontWeight: 800 }} isBlack>&quot;Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo&quot; E. Galeno</Text>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24 }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">
          <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }}/>€
        </Button>
      </Container>

      <Button theme="A" onClick={setIsFormModalOpen.bind(undefined, true)}>HAZTE SOCIA/O</Button>

      <Modal isHidden={!isFormModalOpen} onClose={setIsFormModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socio</Subtitle>
        <JoinForm />
      </Modal>

      <Container isStreched>
        <Video src="/images/videos/CampañaSocios.mp4" />
      </Container>



    </>
  )
}

export default Landing