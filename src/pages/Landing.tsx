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
import JoinForm from '../containers/JoinForm'
import Footer from '../containers/Footer'
import defaultTheme from '../styles/theme'
import Paragraph from '../components/Paragraph'
import { SubSection } from '../components/Section/styles'
import SkipWrap from '../components/SkipWrap'
import theme from '../styles/theme'
import PolicyModal from '../containers/PolicyModal'

const Landing: FC = () => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>(0)
  const [ customAmount, setCustomAmount ] = useState<number>(0)
  const [ isFormModalOpen, setIsFormModalOpen ] = useState<boolean>(false)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState<boolean>(false)


  const handleInputChange = (value: string | number) => {
    setCustomAmount(Number(value))
    setSelectedAmount(Number(value))
  }
  return (
    <Container>
      <button onClick={setIsPolicyModalOpen.bind(undefined, true)}>Privacy</button>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={setIsPolicyModalOpen.bind(undefined, false)} />

      <Container styles={{ position: 'relative', height: '70vh', maxHeight: 1000, overflow: 'hidden' }} isStreched>
        <Image src="/images/playing_kids.jpg" isStreched/>
        <p style={{ position: 'absolute', top: '25%', left: '10%', width: '70%', zIndex: 100 }}>
          <OpenQuote styles={{ color: 'white', fontSize: 120, top: 10, lineHeight: '75px', fontStyle: 'italic', fontWeight: 800, marginRight: -20, left: 20 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', fontStyle: 'italic' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
          <CloseQuote styles={{ color: 'white', fontSize: 120, top: 20, lineHeight: '55px', fontStyle: 'italic', fontWeight: 800 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', marginLeft: 24, fontWeight: 800 }}>E. Galeno</Text>
        </p>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24, margin: '-25px auto 24px' }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5} styles={{ zIndex: defaultTheme.zIndex.medium, marginLeft: 'auto' }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium, marginRight: 'auto' }} theme="C">
          <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }}/>€
        </Button>
      </Container>

      <SkipWrap />
      
      {/* <Button theme="B" onClick={setIsFormModalOpen.bind(undefined, true)} styles={{ margin: '0 auto', fontSize: 36, fontWeight: 800, borderRadius: 40, padding: '20px 35px', background: theme.colors.darkOrange, color: theme.colors.white, marginBottom: 56 }}>HAZTE SOCIA/O</Button> */}
      <Button theme="B" onClick={setIsFormModalOpen.bind(undefined, true)} styles={{ margin: '0 auto', fontSize: 36, fontWeight: 800, borderRadius: 40, padding: '20px 35px', background: theme.colors.offOrange, color: theme.colors.white, marginBottom: 56, border: `${theme.colors.darkRed} 1px solid` }}>HAZTE SOCIA/O</Button>

      <SkipWrap />

      <Container styles={{ padding: '0 75px' }}>
        <Paragraph styles={{ marginBottom: 36 }}>
          La misión de nuestro Proyecto Mawio es mejorar la calidad de vida de las personas en Arusha, al norte de Tanzania, a través de la educación y los medios de vida desde un enfoque participativo. ¡Mira nuestras actividades!
        </Paragraph>

        {/* //! cartas */}
        {/* <Container styles={{ justifyContent: 'space-between', marginBottom: 56 }}>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', background: theme.colors.darkRed, borderRadius: 20 }}>
            <Image src="/images/icons/ball.svg" styles={{ width: 80, marginBottom: 16 }} />
            <Text weight="black" size="m" styles={{ color: theme.colors.offOrange, marginBottom: 8, textAlign: 'center' }}>Talleres de agricultura</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.offOrange, textAlign: 'center' }}>
              Formamos a personas en riesgo de exclusión social en técnicas agricultura tradicional tanzanas.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', background: theme.colors.darkRed, borderRadius: 20 }}>
            <Text weight="black" size="m" styles={{ color: theme.colors.offOrange, marginBottom: 8, textAlign: 'center' }}>Actividades extraescolares</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.offOrange, textAlign: 'center' }}>
              Fomentamos el deporte y la educación emocional en adolescentes, niñas y niños.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', background: theme.colors.darkRed, borderRadius: 20 }}>
            <Text weight="black" size="m" styles={{ color: theme.colors.offOrange, marginBottom: 8, textAlign: 'center' }}>Talleres de género</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.offOrange, textAlign: 'center' }}>
              Apostamos por lograr el empoderamiento de las mujeres en Arusha.
            </Paragraph>
          </Container>
        </Container> */}
        <Container styles={{ justifyContent: 'space-between', marginBottom: 56 }}>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/ball.svg" styles={{ width: 80, marginBottom: 16 }} />
            <Text weight="black" size="m" styles={{ color: theme.colors.darkRed, marginBottom: 8, textAlign: 'center' }}>Talleres de agricultura</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.darkRed, textAlign: 'center' }}>
              Formamos a personas en riesgo de exclusión social en técnicas agricultura tradicional tanzanas.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Text weight="black" size="m" styles={{ color: theme.colors.darkRed, marginBottom: 8, textAlign: 'center' }}>Actividades extraescolares</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.darkRed, textAlign: 'center' }}>
              Fomentamos el deporte y la educación emocional en adolescentes, niñas y niños.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: 'calc(33% - 40px)', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Text weight="black" size="m" styles={{ color: theme.colors.darkRed, marginBottom: 8, textAlign: 'center' }}>Talleres de género</Text>
            <Paragraph size="xs" weight="semibold" styles={{ color: theme.colors.darkRed, textAlign: 'center' }}>
              Apostamos por lograr el empoderamiento de las mujeres en Arusha.
            </Paragraph>
          </Container>
        </Container>

      </Container>

      <Modal isHidden={!isFormModalOpen} onClose={setIsFormModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socia/o</Subtitle>
        <JoinForm />
      </Modal>

      <Container isStreched>
        <Video src="/images/videos/CampañaSocios.mp4" />
      </Container>

      <Image src="/images/IRPFGraph.svg" styles={{ height: 800 }} />
    
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
    </Container>
  )
}

export default Landing