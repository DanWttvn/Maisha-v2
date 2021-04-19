import React from 'react'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Controls from '../components/Timeline/Controls'
import Title from '../components/Title'
import Navbar from '../containers/Navbar'
import WhoSection from '../containers/WhoSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
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
      <Subtitle >Subtitle</Subtitle>
      <Title firstPart="Cómo" secondPart="trabajamos" />
      <Controls onChange={() => console.log('')} currentIndex={3} totalItems={4} styles={{ width: 300 }}></Controls>
      <WhoSection id={'who'} />
    </>
  )
}

export default Home