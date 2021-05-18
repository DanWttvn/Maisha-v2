import React, { useContext, useState } from 'react'
import { FC } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Paragraph from '../../components/Paragraph'
import Subtitle from '../../components/Subtitle'
import Text from '../../components/Text'
import LanguageContext from '../../contexts/language'
import { Point, Card, Button, Modal } from './styles'

interface City {
  city: string
  latitude: number
  longitude: number
  info?: {
    ES: string
    EN: string
    SW: string
  }
}

const data: City[] = [
  {
    city: 'Cambrils',
    latitude: 40.4167,
    longitude: -3.70325,
  },
  {
    city: 'Valladolid',
    latitude: 41.65518,
    longitude: -4.72372,
  },
  {
    city: 'Madrid',
    latitude: 41.0671,
    longitude: 1.05642,
  },
  {
    city: 'Arusha',
    latitude: -3.36667,
    longitude: 36.68333
  }
]

export const Map: FC = () => {
  const { lang } = useContext(LanguageContext)
  const [ selected, setSelected ] = useState<'Madrid' | 'Arusha'>()
  const [ viewport ] = useState({
    latitude: 18,
    longitude: 20,
    zoom: 2.6,
    width: '100%',
    height: '600px'
  })

  const spainCopy = (
    <>
      <Subtitle isSmall color="white">
        {lang === 'ES' && 'España'}
        {lang === 'EN' && 'Spain'}
        {lang === 'SW' && 'Uhispania'}
      </Subtitle>
      <Paragraph color='white'>
        {lang === 'ES' && 'Desde España intentamos reforzar la labor que se lleva a cabo en Tanzania. Creamos puentes culturales a través de programas de sensibilización (principalmente en centros educativos) y realizamos actividades de recaudación de fondos para financiar los proyectos de Tanzania. Nuestra acción y parte del programa de voluntariado se desarrollan, mayoritariamente, en la Comunidad de Madrid, aunque también se llevan a cabo actividades en otras comunidades autónomas, especialmente en Cataluña, donde también contamos con una delegación.'}
        {lang === 'EN' && 'In Spain, we try to reinforce the work carried out in Tanzania. We create cultural bridges through sensitization programs (especially in educational centers) and we develop fundraising activities to raise funds for our projects in Tanzania. Our action and part of our volunteering program are developed in the Comunidad de Madrid, though we also develop some activities in other communities, especially Cataluña, where we also have opened a delegation.'}
        {lang === 'SW' && 'Uhispania, tunajaribu kuimarisha kazi inayofanywa nchini Tanzania. Tunaunda madaraja ya kitamaduni kupitia program za uhamasishaji (haswa katika vituo vya elimu) na tunaendeleza shughuli za kutafuta fedha za kuinua mapato kwa miradi yetu Tanzania. Shughuli zetu na sehemu ya programu yetu ya kujitolea imekuzwa katika eneo la Comunidad de Madrid, ingawa sisi pia huendeleza shughuli nyingine katika jamii zingine, haswa Cataluna, ambapo pia tumefungua ujumbe.'}
      </Paragraph>
    </>
  )

  const tanzaniaCopy = (
    <>
      <Subtitle isSmall color="white">Tanzania</Subtitle>
      <Paragraph color='white'>
        {lang === 'ES' && 'Actualmente, desarrollamos nuestra actividad en la ciudad de Arusha, al norte de Tanzania, aunque no descartamos expandir nuestras acciones por otras zonas del país. Aquí es donde se desarrollan los proyectos de cooperación al desarrollo y los programas de voluntariado.'}
        {lang === 'EN' && 'Nowadays, we develop our activities and projects in Arusha, a city in the north of Tanzania, even though we do not rule out expanding our actions in other areas of the country. Here is where we develop our development projects and volunteering program..'}
        {lang === 'SW' && 'Siku hizi, tunaendeleza shughuli na miradi yetu Arusha, jiji lililopo kaskazini mwa Tanzania, ingawa hatujajiekea mipaka ya kuendelea kukua na kugusa sehemu zingine za nchi. Hapa ndipo tunapoendeleza miradi yetu ya maendeleo na program za kujitolea.'}
      </Paragraph>
    </>
  )

  const points = data.map(x => (
    <Marker key={x.city} latitude={x.latitude} longitude={x.longitude}>
      <Button onClick={setSelected.bind(undefined, x.city)} isHidden={!['Madrid', 'Arusha'].includes(x.city)} styles={{ left: x.city === 'Madrid' ? '-60px' : '-25px', top: x.city === 'Madrid' ? '-15px' : '-25px' }} theme="F">+</Button>
      <Point />
    </Marker>
  ))

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/danielawg/ckosute2r1crk17senzuyxoct"
      >
        {points}
      </ReactMapGL>

      <Card styles={{ top: 290, left: 50 }}>{spainCopy}</Card>
      <Card styles={{ right: 50, bottom: 120 }}>{tanzaniaCopy}</Card>

      <Modal colorTheme="B" isHidden={selected !== 'Madrid'} styles={{ top: 290, left: 50 }} onClose={setSelected.bind(undefined, undefined)}>{spainCopy}</Modal>
      <Modal colorTheme="B" isHidden={selected !== 'Arusha'} styles={{ right: 50, bottom: 120 }} onClose={setSelected.bind(undefined, undefined)}>{tanzaniaCopy}</Modal>
    </>
  )
}

export default Map