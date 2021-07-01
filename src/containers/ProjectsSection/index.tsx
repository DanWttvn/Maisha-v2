import React, { FC, useContext } from 'react'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
import { SectionProps } from '../../models'

//! falta inglés y swahili
export const ProjectsSection: FC<SectionProps> = ({ id }) => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id={id}>
      <Title
        firstPart={(lang === 'ES' && 'QUÉ') || (lang === 'EN' && 'WHAT') || (lang === 'SW' && '') || ''}
        secondPart={(lang === 'ES' && 'HACEMOS') || (lang === 'EN' && 'WE DO') || (lang === 'SW' && '') || ''}
      />

      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Proyecto deportivo'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Creemos en el deporte como motor de desarrollo y, por ello, hemos empezado un proyecto deportivo para fomentar prácticas saludables tanto a nivel físico como a nivel emocional en las escuelas del barrio. A través de la educación emocional, el deporte y la educación nutricional, hemos conseguido llegar a más de 100 niños y niñas que disfrutan cada viernes de un espacio seguro de juego en el que aprenden sobre prácticas saludables.'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Proyecto agrícola'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Apoyamos el empoderamiento socioeconómico de los vecinos y, sobre todo, las vecinas del barrio a través del apoyo técnico en materia de agricultura. Impartimos talleres y sesiones para mejorar la capacidad productiva de los agricultores y agricultoras y así contribuir a su empoderamiento socioeconómico.'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Proyecto de Educación para el Desarrollo y la Ciudadanía Global'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Trabajamos en actividades de sensibilización en España con las que contribuir a la construcción de una ciudadanía global comprometida con el desarrollo sostenible. A través de dinámicas, tertulias, exposiciones y sesiones formativas, realizamos acciones de EpD en diversos centros educativos del país.'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Plan de equidad de género'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Hemos comenzado un análisis poblacional para incluir la perspectiva de género en todos nuestros proyectos y contribuir a la equidad de género. Además, realizamos talleres de formación para los miembros de la asociación, con el fin de incluir este enfoque de manera transversal.'}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default ProjectsSection
