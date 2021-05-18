import React, { FC, useState } from 'react'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Container from '../components/Container'
import Image from '../components/Image'
import Input from '../components/Input'
import Dialog from '../components/Modal'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import { OpenQuote, CloseQuote } from '../components/Text/styles'
import Video from '../components/Video'
import JoinForm from '../containers/JoinForm'
import FooterSimple from '../containers/FooterSimple'
import defaultTheme from '../styles/theme'
import Paragraph from '../components/Paragraph'
import { SubSection } from '../components/Section/styles'
import SkipWrap from '../components/SkipWrap'
import theme from '../styles/theme'

const Landing: FC = () => {
  const [ selectedAmount, setSelectedAmount ] = useState<number>()
  const [ customAmount, setCustomAmount ] = useState<number>(0)
  const [ isFormModalOpen, setIsFormModalOpen ] = useState<boolean>(false)

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    setSelectedAmount(Number(value))
  }

  return (
    <Container>
      <Container styles={{ position: 'relative', height: '70vh', maxHeight: 1000, overflow: 'hidden' }} isStreched>
        <Image src="/images/playing_kids.jpg" hasOverlay isStreched/>
        <p style={{ position: 'absolute', top: '20%', left: '15%', width: '70%', zIndex: 10 }}>
          <OpenQuote styles={{ color: 'white', fontSize: 120, top: 10, lineHeight: '75px', fontStyle: 'italic', fontWeight: 800, marginRight: -20, left: 20 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', fontStyle: 'italic' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
          <CloseQuote styles={{ color: 'white', fontSize: 120, top: 20, lineHeight: '55px', fontStyle: 'italic', fontWeight: 800 }}/>
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', marginLeft: 24, fontWeight: 800 }}>E. Galeno</Text>
        </p>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24, margin: '-25px auto 24px' }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5 && customAmount !== 5} styles={{ zIndex: defaultTheme.zIndex.medium, marginLeft: 'auto' }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10 && customAmount !== 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15 && customAmount !== 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25 && customAmount !== 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium, marginRight: 'auto' }} theme="C">
          <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }}/>€
        </Button>
      </Container>

      <SkipWrap />
      {/* //! mensaje de selct ammount antes de derivarme, si no hay seleccionado */}
      <Button theme="B" onClick={setIsFormModalOpen.bind(undefined, true)} styles={{ margin: '0 auto', fontSize: 36, fontWeight: 800, borderRadius: 40, padding: '20px 35px', background: theme.colors.offOrange, color: theme.colors.white, marginBottom: 24, border: `${theme.colors.darkRed} 1px solid` }}>HAZTE SOCIA/O</Button>
      <SkipWrap />

      <Dialog isHidden={!isFormModalOpen} onClose={setIsFormModalOpen.bind(undefined, false)}>
        <Subtitle>Hazte socia/o</Subtitle>
        <JoinForm amountSelected={selectedAmount || 0} />
      </Dialog>

      <SubSection>
        <Paragraph styles={{ marginBottom: 16 }}>
          <Text size="s" styles={{ marginBottom: 8 }}>La misión de nuestro Proyecto Mawio es mejorar la calidad de vida de una de las comunidades masái de la ciudad de Arusha, al norte de Tanzania, a través del fomento de la educación y el desarrollo de los medios de vida desde un enfoque participativo.</Text>
          <Text size="s" weight="semibold">¡Mira las actividades que ya hemos puesto en marcha!:</Text>
        </Paragraph>
        <Container styles={{ justifyContent: 'space-between', marginBottom: 56 }}>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/agriculture.svg" styles={{ height: 130, margin: '20px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de agricultura</Text>
            <Paragraph size="xs" styles={{ textAlign: 'center' }}>
              La agricultura es la principal fuente de ingresos en la comunidad donde trabajamos. Para que puedan sacarle el máximo partido a sus cultivos, formamos a personas en riesgo de exclusión social en técnicas agrícolas tradicionales en nuestro huerto urbano.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/Ball.svg" styles={{ height: 110, margin: '30px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Actividades extraescolares</Text>
            <Paragraph size="xs" styles={{ textAlign: 'center' }}>
              Una parte muy importante de los niños y niñas en Arusha no ejerce su derecho a jugar todos los días. Por eso, fomentamos el deporte y la educación emocional en adolescentes, niñas y niños.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/Gender.svg" styles={{ height: 120, margin: '25px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de género</Text>
            <Paragraph size="xs" styles={{ textAlign: 'center' }}>
              El 58% de las mujeres de entre 15 y 49 años afirma haber sufrido violencia por parte de su pareja. En Maisha Roots apostamos por el empoderamiento transversal de las mujeres en Arusha como uno de los ejes fundamentales en la lucha contra la violencia de género.
            </Paragraph>
          </Container>
        </Container>
      </SubSection>

      <Container isStreched>
        <Video src="/images/videos/CampañaSocios.mp4" />
      </Container>

      <SubSection styles={{ alignItems: 'center' }}>
        <Image src="/images/IRPFGraph.png" styles={{ height: 400, margin: '20px 50px 0 0' }} />

        <Paragraph size="xs" styles={{ flex: 1, margin: '20px 0 0 50px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
        </Paragraph>
      </SubSection>
    
      <SubSection>
        <Subtitle styles={{ marginBottom: 8 }} isStreched>FAQ</Subtitle>
        <Accordion title="¿Qué significa hacerse socio?" isStreched>
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
        <Accordion title="¿?" isStreched>
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
        <Accordion title="¿?" isStreched>
          <Paragraph size="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis ut libero labore, laudantium id dolorem? Sapiente cumque ullam doloribus autem tempora eum. Possimus laboriosam placeat natus, similique id voluptatem!
          </Paragraph>
        </Accordion>
      </SubSection>

      <FooterSimple/>
    </Container>
  )
}

export default Landing