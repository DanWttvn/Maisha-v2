import React, { FC } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Title from '../components/Title'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import WhoSection from '../containers/WhoSection'
import TimelineSection from '../containers/TimelineSection'
import LanguageContext from '../contexts/language'
import StructureSection from '../containers/StructureSection'

const Home: FC = () => {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
      <Link to="/landing">Landing</Link>

      <Button theme="A">Ahgdf</Button>
      <Button theme="A" styles={{ padding: 15 }}>Ahgdf</Button>
      <Button theme="B">Ahgdf</Button>
      <Paragraph >
        jhsgdf ksdjfh sdfh hjsgd
        <Text weight="black" onClick={() => console.log('isudhf')}>ldih f</Text>
        hjgb
        <Text isHighlighted>ldih f</Text>
        flaugdf
      </Paragraph>

      <Title firstPart="Cómo" secondPart="trabajamos" />
      <Subtitle >Subtitle</Subtitle>




      <WhoSection id="who" />
      <TimelineSection id="timeline" />
      <StructureSection id="structure" />
      
      <Footer />
    </>
  )
}

export default Home