import React, { useState } from 'react'
import { FC } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Text from '../../components/Text'
import { Point, Cross, Button, Dialog } from './styles'

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
    city: 'Madrid',
    latitude: 41.0671,
    longitude: 1.05642,
    info: {
      ES: 'bla bla es',
      EN: 'english',
      SW: 'swahili'
    }
  },
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
    city: 'Arusha',
    latitude: -3.36667,
    longitude: 36.68333,
    info: {
      ES: 'bla bla es',
      EN: 'english',
      SW: 'swahili'
    }
  }
]

export const Map: FC = () => {
  const [selected, setSelected] = useState<City>()
  const [viewport] = useState({
    latitude: 18,
    longitude: 20,
    zoom: 2.6,
    width: '100%',
    height: '600px'
  })

  const points = data.map(x => (
    <Marker key={x.city} latitude={x.latitude} longitude={x.longitude}>
      <Point />
      <Button onClick={setSelected.bind(undefined, x)} isHidden={['Valladolid', 'Cambrils'].includes(x.city)} styles={{ transform: 'translate(-50%, -50%)' }} theme="F"><Cross /></Button>
    </Marker>
  ))

  // //! pasarlo a un process.env
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZGFuaWVsYXdnIiwiYSI6ImNrb3N1angwdTA1NnEyeHE3ZHh2cnRzbm8ifQ.XhCdRR6_KI9dl8kBj3uVJA"
      mapStyle="mapbox://styles/danielawg/ckosute2r1crk17senzuyxoct"
    >
      {points}

      {selected && 
        <Dialog onClose={setSelected.bind(undefined, undefined)}>
          <Text isStreched>{selected.city}</Text>
          <Text isStreched>{selected.info?.ES}</Text>
        </Dialog>
      }
    </ReactMapGL>
  )
}

export default Map