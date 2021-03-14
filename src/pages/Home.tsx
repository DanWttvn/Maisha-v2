import React from "react"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Subtitle from "../components/Subtitle"
import Text from "../components/Text"
import Controls from "../components/Timeline/Controls"
import Title from "../components/Title"
import Modal from "../components/Modal"
import Navbar from "../containers/Navbar"
import WhoSection from "../containers/WhoSection"
import GlobalStyle from '../styles/global'

export default function Home() {
  return (
    <>
      <Navbar />
      <p style={{ marginBottom: 100 }}>usdgfh</p>
      <Button theme="A">Ahgdf</Button>
      <Button theme="A" styles={{ padding: 15 }}>Ahgdf</Button>
      <Button theme="B">Ahgdf</Button>

      <Paragraph >
        jhsgdf ksdjfh sdfh hjsgd 
        <Text isBlack onClick={() => console.log('isudhf')}>ldih f</Text> 
        hjgb 
        <Text isHighlighted>ldih f</Text> 
        flaugdf
      </Paragraph>
      <Subtitle >Subtitle</Subtitle>

      <Title firstPart="Cómo" secondPart="trabajamos" />


      <Modal>
        <Subtitle >Subtitle</Subtitle>
      </Modal>
      

      <Controls onChange={() => console.log('')} currentIndex={3} totalItems={4} styles={{ width: 300 }}></Controls>
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}

      <WhoSection id={'who'} />

      {/* <GlobalStyle /> */}

    </>
  )
}
