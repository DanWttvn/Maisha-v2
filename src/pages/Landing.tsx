import React, { FC, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import Image from '../components/Image'
import Input from "../components/Input"
import Modal from "../components/Modal"
import Subtitle from "../components/Subtitle"
import Text from '../components/Text'
import defaultTheme from '../themes/theme'
import VideoPlayer from 'react-video-js-player'

const Landing: FC = () => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>(0)
  const [ customAmount, setCustomAmount ] = useState<number>(0)
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)


  const handleInputChange = (value: string | number) => {
    setCustomAmount(Number(value))
    setSelectedAmount(Number(value))
  }
  console.log(selectedAmount)

  return (
    <>
      <Container styles={{ position: 'relative', height: '70vh', maxHeight: 1000, overflow: 'hidden' }} isStreched>
        <Image src="/images/playing_kids.jpg" isStreched/>
        <Text styles={{ position: 'absolute', top: '20%', left: '10%', color: 'white', fontSize: 55, width: '70%', fontWeight: 800 }} isBlack>"Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo" E. Galeno</Text>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24 }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">
          <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }}/>
          €
        </Button>
      </Container>

      <Button theme="A" onClick={setIsModalOpen.bind(undefined, true)}>HAZTE SOCIA/O</Button>

      <Modal isHidden={!isModalOpen} onClose={setIsModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socio</Subtitle>
        
      </Modal>

      <VideoPlayer
        src={}
      />

      //* video: https://docs.videojs.com/tutorial-react.html https://videojs.com/getting-started
      //* https://www.youtube.com/watch?v=lVJLNsLNnWs&t=4s&ab_channel=Arslan

    </>
  )
}

export default Landing