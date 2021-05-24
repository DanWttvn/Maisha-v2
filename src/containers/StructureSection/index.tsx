import React, { FC, useContext } from 'react'
import Image from '../../components/Image'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import Text from '../../components/Text'
import Container from '../../components/Container'
import theme from '../../styles/theme'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
import { GroupCard } from './styles'

interface Props {
  id?: string
}

export const StructureSection: FC<Props> = ({ id }) => {
  const { lang } = useContext(LanguageContext)

  // * hacerla en sw
  const imgSrc =
    lang === 'ES' ? './images/esquema-organizacion-ES.png'
      : lang === 'EN' ? './images/esquema-organizacion-EN.png'
        : './images/esquema-organizacion-EN.png'

  return (
    <Section id={id}>
      <Title
        firstPart={(lang === 'ES' && 'CÓMO') || (lang === 'EN' && 'HOW') || (lang === 'SW' && 'JINSI TUNAVYO') || ''}
        secondPart={(lang === 'ES' && 'TRABAJAMOS') || (lang === 'EN' && 'WE WORK') || (lang === 'SW' && 'FANYA KAZI') || ''}
      />

      <SubSection>
        <Container styles={{ justifyContent: 'space-around', alignItems: 'center', marginBottom: 60 }} isFullWidth>
          <Container styles={{ borderLeft: `10px solid ${theme.colors.offRed}`, padding: '0 20px 0 40px', width: '55%', paddingRight: 20 }}>
            <Paragraph>
              {lang === 'ES' && 'Nuestra estructura está basada, en su gran mayoría, en personal voluntario, sobre todo en el caso de España, donde la totalidad del equipo está formada por personal voluntario. No obstante, contamos con un equipo directivo fuerte, estable y comprometido que, en parte, se dedica a la cooperación y al desarrollo de manera profesional. En el caso de Tanzania, el personal es asalariado.'}
              {lang === 'EN' && 'Our current structure is mainly based on volunteers, especially in the case of Spain, where, apart from our Projects’ Technician, all the team is composed of volunteers. In the case of Tanzania, the team is composed of workers.'}
              {lang === 'SW' && 'Muundo wetu wa sasa ni kujitolea, haswa katika nchi ya Uhispania, ambapo mbali na Miradi yetu Ufundi, timu yetu inaundwa na wahisani. Kwa upande wa Tanzania, timu inaudwa na wafanyakazi.'}
            </Paragraph>
            <Paragraph styles={{ marginBottom: 0 }}>
              {lang === 'ES' && <>Creemos que, en nuestra organización, <strong>todas las voces cuentan</strong> y deben ser escuchadas. En las acciones de cooperación al desarrollo, actuamos como dos contrapartes paralelas con dos órganos de gobierno y dos asambleas generales. Además, contamos con varios grupos de trabajo que van variando en función de las necesidades del momento. En las acciones de Educación para el Desarrollo y la ciudadanía global llevadas a cabo en España, trabajamos de forma independiente, mientras que la entidad tanzana también desarrolla acciones de sensibilización autónomas.</>}
              {lang === 'EN' && <>We believe that, within our organization, <strong>all voices must be heard.</strong> Since we are two parallel counterparts, we have two governing organs and two general assemblies. Furthermore, in the Spanish team (where we have all volunteers), we count with various working groups which vary according to the needs of the current moment.</>}
              {lang === 'SW' && <>Tunaamini kwamba, ndani ya shirika letu, <strong>sauti zote lazima zisikilizwe</strong>. Kwa kuwa sisi ni wawili tunaofanana, tunavyo vyombo viwili vya kutawala na mkusanyiko mmoja wa jumla. Kwa kuongezea, kwenye timu ya Uhispania (ambapo tunao watu wote wanaojitolea), tunahesabu na vikundi mbali mbali vya kufanya kazi ambazo hutofautiana kulingana na mahitaji ya wakati huo.</>}
            </Paragraph>
          </Container>
          <Image src={imgSrc} styles={{	paddingTop: 20, width: 430, maxWidth: '100%' }}/>
        </Container>

        {/* //! grupos e iconos */}

        <Container styles={{ justifyContent: 'center' }}>
          <GroupCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Asamblea General'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Subtitle>
            <Paragraph styles={{ textAlign: 'justify' }}>
              {lang === 'ES' && 'Es el grupo de trabajo y de toma de decisiones principal. Está formado por personal voluntario que se ha comprometido con la organización a largo plazo. Se reúne, aproximadamente, una vez cada mes para debatir y tomar decisiones importantes.'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Paragraph>
          </GroupCard>

          <GroupCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Junta directiva'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Subtitle>
            <Paragraph styles={{ textAlign: 'justify' }}>
              {lang === 'ES' && 'Está formada por cuatro miembros elegidos cada año por la Asamblea. Se encarga de dirigir las actividades de la organización, así como de gestionar el voluntariado y los proyectos. Son la representación legal de la organización y tienen cargos no remunerados, voluntarios.'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Paragraph>
          </GroupCard>


          <GroupCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Grupos de trabajo'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Subtitle>
            <Paragraph styles={{ textAlign: 'justify' }}>
              {lang === 'ES' && 'Están formados por voluntariado español que trabaja en colaboración con el personal tanzano. Fueron creados para coordinar las diferentes actividades de la organización de una forma más dinámica y eficiente.'}
              {lang === 'EN' && ''}
              {lang === 'SW' && ''}
            </Paragraph>
          </GroupCard>
        </Container>

      </SubSection>

      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Colaboradores/as'}
          {lang === 'EN' && 'Collaborators'}
          {lang === 'SW' && 'Washirika'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && <>Colaborar con nosotros es muy fácil. Se puede hacer de distintas formas, como, por ejemplo, a través de donaciones puntuales, con la cesión de un local, mediante los voluntariados ocasionales, etc. Además, en Maisha Roots creemos que el <strong>tejido social</strong> es la base para el crecimiento, por lo que también buscamos <strong>establecer lazos y alianzas</strong> con empresas, entidades y otras ONGs. Tratamos de que estas colaboraciones sean más que un apoyo económico y buscamos establecer relaciones de colaboración que promuevan el crecimiento en Tanzania.</>}
          {lang === 'EN' && <>Collaborating with us is really simple. You can do it in different ways, such as, contributing with a punctual donation, granting us a space, volunteering with us, etc. Moreover, Maisha Roots believes that the <strong>social fabric</strong> of a community is the key to growth and, therefore, we also look for <strong>links and alliances</strong> with enterprises, entities, and other NGOs. We expect these collaborations to be more than economic support and we try to establish collaborations that promote the development in Tanzania.</>}
          {lang === 'SW' && <>Kuungana na sisi ni rahisi sana. Unaeza kufanya kwa njia tofauti, kama, kuchangia michango kwa wakati, kutupatia nafasi, kufanya shughuli za kujitolea na sisi, n.k. Zaidi ya hayo, Maisha Roots inaamini kuwa <strong>kitambaa cha kijamii</strong> ndio ufunguo wa kukua na, kwa hiyo, sisi pia tunatafuta mahusiano na ushirikiano na wafanya biashara, taasisi na mashirika mengine. Tunatarajia ushirikiano huu kuwa zaidi ya msaada wa kiuchumi na tunajaribu kuanzisha ushirikiano ambao unakuza maendeleo nchini Tanzania.</>}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default StructureSection
