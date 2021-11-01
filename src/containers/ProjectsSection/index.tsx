import React, { FC, useContext } from 'react'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
import { SectionProps } from '../../models'

//! missing

export const ProjectsSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id="projects">
      <Title
        firstPart={(lang === 'ES' && 'QUÉ') || (lang === 'EN' && 'WHAT') || (lang === 'SW' && '') || ''}
        secondPart={(lang === 'ES' && 'HACEMOS') || (lang === 'EN' && 'WE DO') || (lang === 'SW' && '') || ''}
      />

      {/* //! tengo fotos en el email */}
      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Deporte y salud'}
          {lang === 'EN' && 'Sports and health'}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Creemos que el deporte puede ser un motor para el desarrollo, aportando tanto bienestar físico como empoderamiento social. En una zona donde tanto el acceso a servicios básicos como el tiempo de esparcimiento están limitados, la adquisición de hábitos saludables es de vital importancia. Por ello, realizamos actividades deportivas semanales en dos centros educativos del barrio de Mkono, con más de 200 alumnos y alumnas de educación primaria y secundaria. A través de diferentes actividades deportivas, torneos, ejercicios de educación emocional y diversos talleres (primeros auxilios, educación sexual, etc.) contribuimos a mantener un nivel de vida saludable entre las personas jóvenes del barrio.'}
          {lang === 'EN' && 'We believe that sport can be an engine for development, providing both physical well-being and social empowerment. In an area where both access to basic services and leisure time are limited, the acquisition of healthy habits is of vital importance. For this reason, we carry out weekly sports activities in two educational centers in the Mkono neighborhood, with more than 200 primary and secondary school students. Through different sports activities, tournaments, emotional education exercises, and various workshops (first aid, sex education, etc.) we contribute to maintaining a healthy life standard among young people in the neighborhood.'}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Igualdad de género'}
          {lang === 'EN' && 'Gender equality'}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Además de incluir la perspectiva de género en el desarrollo de todos nuestros proyectos, apoyamos la creación de clubs de debate en los centros educativos del barrio de Mkono, abordando temas como la desigualdad, la violencia o la salud sexual y reproductiva de las mujeres. Internamente, llevamos a cabo formaciones en materia de igualdad de género tanto para el personal tanzano como para el personal español.'}
          {lang === 'EN' && 'In addition to including the gender perspective in the development of all our projects, we support the creation of discussion clubs in the educational centers of the Mkono neighborhood, addressing issues such as inequality, violence, or women\'s sexual and reproductive health. Internally, we conduct gender equality training for both Tanzanian and Spanish teams.'}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Educación'}
          {lang === 'EN' && 'Education'}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Cada semana proporcionamos clases de refuerzo a alumnas/os de los centros educativos de Mkono, contribuyendo a la reducción del fracaso escolar en la ciudad de Arusha. El alumnado de las clases es escogido por los profesores del centro en colaboración con la ONG y las clases son impartidas por personal docente de Maisha Roots.'}
          {lang === 'EN' && 'Every week we provide reinforcement classes to students from Mkono educational centers, contributing to the reduction of school failure in the city of Arusha. The students of the classes are chosen by the teachers of the center in collaboration with the NGO and the classes are taught by teaching staff from Maisha Roots.'}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Desarrollo agrícola'}
          {lang === 'EN' && 'Agricultural development'}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'Para contribuir al desarrollo socioeconómico de la comunidad, ofrecemos a la población de Mkono talleres sobre técnicas de cultivo que mejoren la productividad de las tierras. Estos cursos se desarrollan en un terreno alquilado por Maisha Roots para que las personas beneficiarias puedan poner en práctica los conocimientos adquiridos.'}
          {lang === 'EN' && 'To contribute to the socio-economic development of the community, we offer the people of Mkono workshops on cultivation techniques that improve the productivity of the land. These courses take place on land rented by Maisha Roots so that the beneficiaries can put the acquired knowledge into practice.'}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Educación para el Desarrollo'}
          {lang === 'EN' && 'Education for Development'}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && 'En España, llevamos a cabo sesiones, talleres, cursos y actividades de sensibilización y educación para el desarrollo, tratando de mejorar la comprensión del mundo globalizado y contribuyendo a provocar una actitud crítica y comprometida con la realidad mundial. Para ello, trabajamos tanto desde la educación formal como la informal, acudiendo a centros educativos y a grupos de escultismo a realizar actividades lúdicas de concienciación. También hemos organizado exposiciones y difundido material de sensibilización sobre las dinámicas mundiales y los ODS.'}
          {lang === 'EN' && 'In Spain, we carry out sessions, workshops, courses, and activities to raise awareness and education for development, trying to improve the understanding of the globalized world and helping to provoke a critical and committed attitude towards world reality. To do this, we work from both formal and informal education, going to educational centers and scouting groups to carry out recreational awareness-raising activities. We have also organized exhibitions and disseminated awareness-raising material on global dynamics and the SDGs.'}
          {lang === 'SW' && ''}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default ProjectsSection
