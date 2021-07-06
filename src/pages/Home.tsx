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
import ProjectsSection from '../containers/ProjectsSection'
import ColaborateSection from '../containers/ColaborateSection'
import TransparencySection from '../containers/TransparencySection'
import NewsletterPopup from '../containers/NewsletterPopup'

const Home: FC = () => {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
      <Link to="/landing">Landing</Link>

      <Button variant="A">Variant A</Button>
      <Button variant="A" styles={{ padding: 15 }}>Ahgdf</Button>
      <Button variant="B">Variant B</Button>
      <Paragraph >
        jhsgdf ksdjfh sdfh hjsgd
        <Text weight="black" onClick={() => console.log('isudhf')}>ldih f</Text>
        hjgb
        <Text isHighlighted>ldih f</Text>
        flaugdf
      </Paragraph>

      <Title firstPart="Cómo" secondPart="trabajamos" />
      <Subtitle>Subtitle</Subtitle>
      <NewsletterPopup />

      <WhoSection id="who" />
      <TimelineSection id="timeline" />
      <StructureSection id="structure" />
      <ProjectsSection id="projects" />
      <ColaborateSection id="colaborate" />
      <TransparencySection id="transparency" />
      
      <Footer />
    </>
  )
}

export default Home