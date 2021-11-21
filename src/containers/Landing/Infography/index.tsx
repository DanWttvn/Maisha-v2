import React, { FC } from 'react'
import Container from '../../../components/Container'
import Text from '../../../components/Text'
import DataText from '../../DataText'
import { SubSection, DataContainer } from './styles'

const Infography: FC = () => {
  return (
    <SubSection isNarrow>
      <Container direction="horizontal" styles={{ justifyContent: 'space-around' }} isFullWidth>
        <Container>
          <DataContainer direction="vertical">
            <DataText>320</DataText>
            <Text weight="bold" isCentered>menores</Text>
            <Text weight="bold" isCentered>beneficiarios</Text>
          </DataContainer>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <DataContainer direction="vertical">
            <DataText>44</DataText>
            <Text weight="bold" isCentered>personas adultas</Text>
            <Text weight="bold" isCentered>beneficiarias</Text>
          </DataContainer>
        </Container>
        <DataContainer direction="vertical">
          <DataText>+250</DataText>
          <Text weight="bold" isCentered>personas sensibilizadas</Text>
        </DataContainer>
      </Container>
      <Container styles={{ justifyContent: 'space-around' }} isFullWidth>
        <DataContainer direction="vertical">
          <DataText>120</DataText>
          <Text weight="bold" isCentered>Voluntarios/as</Text>
        </DataContainer>
        <Container>
          <DataContainer direction="vertical">
            <DataText>5</DataText>
            <Text weight="bold" isCentered>convenios con</Text>
            <Text weight="bold" isCentered>universidades</Text>
          </DataContainer>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <DataContainer direction="vertical">
            <DataText>3</DataText>
            <Text weight="bold" isCentered>Colegios amigos</Text>
          </DataContainer>
        </Container>
        <DataContainer direction="vertical">
          <DataText>40</DataText>
          <Text weight="bold" isCentered>Socios/as</Text>
        </DataContainer>
      </Container>
    </SubSection>
  )
}
export default Infography