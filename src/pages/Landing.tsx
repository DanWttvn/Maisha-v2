import React, { FC, useState } from 'react'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Container from '../components/Container'
import Image from '../components/Image'
import Input from '../components/Input'
import Modal from '../components/Modal'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import { OpenQuote, CloseQuote } from '../components/Text/styles'
import Video from '../components/Video'
import Tabs from '../components/Tabs'
import JoinForm from '../containers/JoinForm'
import Policy from '../containers/Policy'
import Footer from '../containers/Footer'
import Cookies from '../containers/Cookies'
import defaultTheme from '../styles/theme'
import Paragraph from '../components/Paragraph'
import { SubSection } from '../components/Section/styles'

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
        <p style={{ position: 'absolute', top: '25%', left: '10%', width: '70%', zIndex: 100 }}>
          <OpenQuote styles={{ color: 'white', fontSize: 120, top: 10, lineHeight: '75px', fontStyle: 'italic', fontWeight: 800, marginRight: -20, left: 20 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', fontStyle: 'italic' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
          <CloseQuote styles={{ color: 'white', fontSize: 120, top: 20, lineHeight: '55px', fontStyle: 'italic', fontWeight: 800 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', marginLeft: 24, fontWeight: 800 }}>E. Galeno</Text>
        </p>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24 }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5} styles={{ zIndex: defaultTheme.zIndex.medium, marginLeft: 'auto' }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium, marginRight: 'auto' }} theme="C">
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

      <SubSection>
        <Subtitle styles={{ marginBottom: 8 }}>FAQ</Subtitle>
        <Accordion title="¿Qué significa hacerse socio?">
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
        <Accordion title="¿?">
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
        <Accordion title="¿?">
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
      </SubSection>

      <Footer/>
    </>
  )
}

export default Landing