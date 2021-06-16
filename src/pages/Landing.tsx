import React, { FC, useState } from 'react'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Container from '../components/Container'
import Image from '../components/Image'
import Input from '../components/Input'
import Dialog from '../components/Dialog'
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
  const [selectedAmount, setSelectedAmount] = useState<number>()
  const [customAmount, setCustomAmount] = useState<number>(0)
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false)

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    setSelectedAmount(Number(value))
  }

  return (
    <Container>
      <Container styles={{ position: 'relative', height: '70vh', maxHeight: 1000, overflow: 'hidden' }} isFullWidth>
        <Image src="/images/playing_kids.jpg" hasOverlay isFullWidth />
        <p style={{ position: 'absolute', top: '20%', left: '15%', width: '70%', zIndex: 10 }}>
          <OpenQuote styles={{ color: 'white', fontSize: 120, top: 10, lineHeight: '75px', fontStyle: 'italic', fontWeight: 800, marginRight: -20, left: 20 }} />
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', fontStyle: 'italic' }}>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo</Text>
          <CloseQuote styles={{ color: 'white', fontSize: 120, top: 20, lineHeight: '55px', fontStyle: 'italic', fontWeight: 800 }} />
          <Text size="xl" weight="black" styles={{ color: 'white', fontSize: 60, lineHeight: '75px', marginLeft: 24, fontWeight: 800 }}>E. Galeno</Text>
        </p>
      </Container>

      <Container styles={{ marginTop: -25, marginBottom: 24, margin: '-25px auto 24px' }}>
        <Button onClick={setSelectedAmount.bind(undefined, 5)} isSelected={selectedAmount === 5 && customAmount !== 5} styles={{ zIndex: defaultTheme.zIndex.medium, marginLeft: 'auto' }} theme="C">5€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 10)} isSelected={selectedAmount === 10 && customAmount !== 10} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">10€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 15)} isSelected={selectedAmount === 15 && customAmount !== 15} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">15€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, 25)} isSelected={selectedAmount === 25 && customAmount !== 25} styles={{ zIndex: defaultTheme.zIndex.medium }} theme="C">25€</Button>
        <Button onClick={setSelectedAmount.bind(undefined, customAmount)} isSelected={selectedAmount === customAmount} styles={{ zIndex: defaultTheme.zIndex.medium, marginRight: 'auto' }} theme="C">
          <Input type="number" onChange={handleInputChange} styles={{ marginRight: 12 }} />€
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
          <Text styles={{ marginBottom: 8 }} isFullWidth>La misión de nuestro Proyecto Mawio es mejorar la calidad de vida de una de las comunidades masái de la ciudad de Arusha, al norte de Tanzania, a través del fomento de la educación y el desarrollo de los medios de vida desde un enfoque participativo.</Text>
          <Text weight="bold" isFullWidth>¡Mira las actividades que ya hemos puesto en marcha!</Text>
        </Paragraph>
        <Container styles={{ justifyContent: 'space-between', marginBottom: 56 }}>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/agriculture.svg" styles={{ height: 130, margin: '20px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de agricultura</Text>
            <Paragraph size="s" styles={{ textAlign: 'center' }}>
              La agricultura es la principal fuente de ingresos en la comunidad donde trabajamos. Para que puedan sacarle el máximo partido a sus cultivos, formamos a personas en riesgo de exclusión social en técnicas agrícolas tradicionales en nuestro huerto urbano.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/Ball.svg" styles={{ height: 110, margin: '30px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Actividades extraescolares</Text>
            <Paragraph size="s" styles={{ textAlign: 'center' }}>
              Una parte muy importante de los niños y niñas en Arusha no ejerce su derecho a jugar todos los días. Por eso, fomentamos el deporte y la educación emocional en adolescentes, niñas y niños.
            </Paragraph>
          </Container>
          <Container direction="vertical" styles={{ width: '33%', padding: '25px 20px', alignItems: 'center', borderRadius: 20 }}>
            <Image src="/images/icons/Gender.svg" styles={{ height: 120, margin: '25px 0' }} />
            <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de género</Text>
            <Paragraph size="s" styles={{ textAlign: 'center' }}>
              El 58% de las mujeres de entre 15 y 49 años afirma haber sufrido violencia por parte de su pareja. En Maisha Roots apostamos por el empoderamiento transversal de las mujeres en Arusha como uno de los ejes fundamentales en la lucha contra la violencia de género.
            </Paragraph>
          </Container>
        </Container>
      </SubSection>

      <Container isFullWidth>
        <Video src="/images/videos/CampañaSocios.mp4" />
      </Container>

      <SubSection styles={{ alignItems: 'center' }}>
        <Image src="/images/IRPFGraph.png" styles={{ height: 400, margin: '20px 50px 0 0' }} />

        <Paragraph styles={{ flex: 1, margin: '20px 0 0 50px' }}>
          <Subtitle>Donar tiene recompensa!</Subtitle>
          <Paragraph>
            {/* La Utilidad Pública, concedida el pasado 29 de julio de 2020, permite que nuestros socios/as puedan desgravar en su Declaración de la Renta de acuerdo con los porcentajes indicados en la sección superior */}
            La Utilidad Pública, concedida el pasado 29 de julio de 2020, permite que nuestros socios/as puedan desgravar en su Declaración de la Renta de acuerdo con los porcentajes indicados en el esquema
          </Paragraph>
          <Paragraph size="s">
            * Si en los dos períodos impositivos inmediatos anteriores se hubieran realizado donativos, donaciones o aportaciones con derecho a deducción en favor de una misma entidad por importe igual o superior, en cada uno de ellos, al del ejercicio anterior, el porcentaje de deducción aplicable a la base de la deducción en favor de esa misma entidad que exceda de 150 euros, será el 40 por ciento.
          </Paragraph>
        </Paragraph>

      </SubSection>
      <SubSection>
        <Subtitle styles={{ marginBottom: 8 }} isFullWidth>FAQ</Subtitle>
        <Accordion title="¿Qué significa ser socio/a de Maisha Roots?" isFullWidth>
          <Paragraph color="darkGrey" size="s">
            La <strong>estabilidad económica</strong> es la clave del éxito de cualquier proyecto de cooperación al desarrollo, sobre todo para asociaciones pequeñas como la nuestra. Gracias a tu ayuda y la de las <strong>40 personas que ya son socias</strong> de Maisha Roots, conseguimos una financiación estable que nos permitirá:
          </Paragraph>
          <ul>
            <li><Text color="darkGrey" size="s">Seguir apoyando, por muchos años más, a las más de 100 personas beneficiarias de nuestros proyectos en la comunidad de Arusha, Tanzania, donde trabajamos.</Text></li>
            <li><Text color="darkGrey" size="s">Aumentar el alcance de nuestro Proyecto Mawio y su continuación en el tiempo</Text></li>
            <li><Text color="darkGrey" size="s">Sacar adelante futuros proyectos</Text></li>
            <li><Text color="darkGrey" size="s">Potenciar nuestra sostenibilidad</Text></li>
          </ul>
        </Accordion>
        <Accordion title="¿A qué va destinada mi aportación?" isFullWidth>
          <Text color="darkGrey" size="s">
            Con tu contribución, no importa la cantidad, estás haciendo posible que saquemos adelante nuestros proyectos actuales y futuros. Tu aportación nos permite pagar a nuestro <strong>equipo local tanzano</strong>, comprar los <strong>materiales</strong> que necesitamos para desarrollar nuestros talleres y proyectos y hacer frente a los <strong>gastos</strong> de la ONG.
          </Text>
        </Accordion>
        <Accordion title="¿Qué ventajas obtengo como socio/a?" isFullWidth>
          <Text color="darkGrey" size="s">
            Además de la correspondiente <strong>desgravación</strong> en tu Declaración de la Renta, recibirás cada tres meses nuestra <strong>Newsletter</strong> en la que te contaremos todos los avances que vamos consiguiendo gracias a tu ayuda.
          </Text>
        </Accordion>
        <Accordion title="¿Ser socio/a tiene beneficios fiscales?" isFullWidth>
          <Text color="darkGrey" size="s">
            ¡Sí! La Utilidad Pública, concedida el pasado 29 de julio de 2020, permite que nuestros socios/as puedan desgravar en su Declaración de la Renta de acuerdo con los porcentajes indicados en la sección superior
          </Text>
        </Accordion>
        <Accordion title="¿Tengo que hacer una aportación mínima?" isFullWidth>
          <Text color="darkGrey" size="s">
            No. Cuando te haces socio/a de Maisha Roots <strong>eliges la cantidad</strong> fija que quieres o puedes aportar <strong>cada mes</strong>. ¡Cada euro puede hacer una <strong>gran diferencia</strong>!
          </Text>
        </Accordion>
        <Accordion title="¿Puedo darme de baja?" isFullWidth>
          <Text color="darkGrey" size="s">
            Ser socio/a de Maisha Roots es voluntario, puedes serlo <strong>durante el tiempo que quieras o puedas</strong>. ¡Desde Maisha Roots esperamos que sea durante mucho tiempo! Eso significaría que estamos haciendo las cosas bien y que estás <strong>feliz con nuestro trabajo</strong>.
          </Text>
        </Accordion>
      </SubSection>
      <FooterSimple />
    </Container>
  )
}

export default Landing