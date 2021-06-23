import React, { FC } from 'react'
import Container from '../../../components/Container'
import Text from '../../../components/Text'
import DataText from '../../DataText'
import { SubSection } from '../../../components/Section/styles'

const Infography: FC = () => {
  return (
    <SubSection isNarrow>
      <Container direction="horizontal" styles={{ justifyContent: 'space-around' }} isFullWidth>
        <Container>
          <Container direction="vertical" styles={{ margin: '30px 0px' }}>
            <DataText>320</DataText>
            <Text weight="bold" isCentered>menores</Text>
            <Text weight="bold" isCentered>beneficiarios</Text>
          </Container>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <Container direction="vertical" styles={{ margin: '30px 0px' }}>
            <DataText>44</DataText>
            <Text weight="bold" isCentered>personas adultas</Text>
            <Text weight="bold" isCentered>beneficiarias</Text>
          </Container>
        </Container>
        <Container direction="vertical" styles={{ margin: '30px 0px' }}>
          <DataText>+250</DataText>
          <Text weight="bold" isCentered>personas sensibilizadas</Text>
        </Container>
      </Container>

      <Container styles={{ justifyContent: 'space-around' }} isFullWidth>
        <Container direction="vertical" styles={{ margin: '30px 0' }}>
          <DataText>120</DataText>
          <Text weight="bold" isCentered>Voluntarias/as</Text>
        </Container>
        <Container>
          <Container direction="vertical" styles={{ margin: '30px 0px' }}>
            <DataText>5</DataText>
            <Text weight="bold" isCentered>convenios con</Text>
            <Text weight="bold" isCentered>universidades</Text>
          </Container>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <Container direction="vertical" styles={{ margin: '30px 0px' }}>
            <DataText>3</DataText>
            <Text weight="bold" isCentered>Colegios amigos</Text>
          </Container>
        </Container>
        <Container direction="vertical" styles={{ margin: '30px 0' }}>
          <DataText>40</DataText>
          <Text weight="bold" isCentered>Socios/as</Text>
        </Container>
      </Container>
    </SubSection>
  )
}
export default Infography