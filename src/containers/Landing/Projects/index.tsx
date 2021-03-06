import React, { FC } from 'react'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Paragraph from '../../../components/Paragraph'
import SubSection from '../../../components/SubSection'
import { ProjectContainer, Project } from './styles'

const Projects: FC = () => {
  return (
    <SubSection>
      <Paragraph styles={{ marginBottom: 16 }}>
        <Text styles={{ marginBottom: 8, marginRight: 4 }} isFullWidth>La misión de nuestro Proyecto Mawio es mejorar la calidad de vida d
        e una de las comunidades masái de la ciudad de Arusha, al norte de Tanzania, a través del fomento de la educación y el desarrollo de los medios de vida desde un enfoque participativo.</Text>
        <Text weight="bold" isFullWidth>¡Mira las actividades que ya hemos puesto en marcha!</Text>
      </Paragraph>
      <ProjectContainer>
        <Project direction="vertical">
          <Image src="/images/icons/agriculture.svg" styles={{ height: 130, margin: '20px 0' }} />
          <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de agricultura</Text>
          <Paragraph size="s" styles={{ textAlign: 'center' }}>
            La agricultura es la principal fuente de ingresos en la comunidad donde trabajamos. Para que puedan sacarle el máximo partido a sus cultivos, formamos a personas en riesgo de exclusión social en técnicas agrícolas tradicionales en nuestro huerto urbano.
          </Paragraph>
        </Project>
        <Project direction="vertical">
          <Image src="/images/icons/Ball.svg" styles={{ height: 110, margin: '30px 0' }} />
          <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Actividades extraescolares</Text>
          <Paragraph size="s" styles={{ textAlign: 'center' }}>
            Una parte muy importante de los niños y niñas en Arusha no ejerce su derecho a jugar todos los días. Por eso, fomentamos el deporte y la educación emocional en adolescentes, niñas y niños.
          </Paragraph>
        </Project>
        <Project direction="vertical">
          <Image src="/images/icons/Gender.svg" styles={{ height: 120, margin: '25px 0' }} />
          <Text weight="black" size="m" styles={{ marginBottom: 8, marginTop: 16, textAlign: 'center' }}>Talleres de género</Text>
          <Paragraph size="s" styles={{ textAlign: 'center' }}>
            El 58% de las mujeres de entre 15 y 49 años afirma haber sufrido violencia por parte de su pareja. En Maisha Roots apostamos por el empoderamiento transversal de las mujeres en Arusha como uno de los ejes fundamentales en la lucha contra la violencia de género.
          </Paragraph>
        </Project>
      </ProjectContainer>
    </SubSection>
  )
}
export default Projects