import React, { FC, useContext } from 'react'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
import { SectionProps } from '../../models'
import Li from '../../components/Li'
import Link from '../../components/Link'

export const TransparencySection: FC<SectionProps> = ({ id }) => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id={id}>
      <Title firstPart={(lang === 'ES' && 'TRANSPARENCIA') || (lang === 'EN' && 'TRANSPARENCY') || (lang === 'SW' && 'UWAZI GHARAMA') || ''} />
      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Mecanismos de buen gobierno'}
          {lang === 'EN' && 'Good governance Mechanisms'}
          {lang === 'SW' && 'Mbinu za utawala bora'}
        </Subtitle>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Maisha Roots aboga por la transparencia y el buen gobierno, cumpliendo en toda ocasión con la normativa, tanto interna como externa, en todas las acciones que emprende.'}
          {lang === 'EN' && 'Maisha Roots advocates for transparency and good governance, accomplishing with the stipulated regulations, both intern and extern, in all the actions that we undertake.'}
          {lang === 'SW' && 'Maisha Roots inatetea kwa uwazi na utawala bora, ikitimiza kanuni zilizo ainishwa, za ndani na nje, katika vitendo vyote tunavyofanywa.'}
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Maisha Roots identifica, como principios de buen gobierno, los siguientes:'}
          {lang === 'EN' && 'Maisha Roots identifies, as good governance principles, these:'}
          {lang === 'SW' && 'Utambuzi wa Maisha Roots, kama kanuni bora za utawala, nazo ni:'}
        </Paragraph>
        <ul style={{ marginBottom: 16 }}>
          <Li>
            {lang === 'ES' && <Link href="https://maisharoots.org/img/docs/Mecan%C3%ADsmo_de_gesti%C3%B3n_de_conflictos_de_inter%C3%A9s-Maisha_Roots.pdf">Gestión de conflictos de interés en el órgano de gobierno</Link>}
            {lang === 'EN' && 'Management of conflicts of interest in the Management team'}
            {lang === 'SW' && 'Usimamizi wa migogoro ya kimaslahi katika timu ya usimamizi'}
          </Li>
          <Li>
            {lang === 'ES' && <Link href="https://maisharoots.org/img/docs/Criterios_de_selecci%C3%B3n_de_colaboradores_y_contrapartes-Maisha_Roots.pdf">Selección responsable de contrapartes y colaboradores</Link>}
            {lang === 'EN' && 'Responsible selection of partners and collaboration'}
            {lang === 'SW' && 'Uwajibikaji wa uteuzi wa washirika'}
          </Li>
          <Li>
            {lang === 'ES' && <Link href="https://maisharoots.org/img/docs/Aprobaci%C3%B3n_de_gastos_y_selecci%C3%B3n_de_proveedores-Maisha_Roots.pdf">Aprobación razonada de gastos y proveedores</Link>}
            {lang === 'EN' && 'Reasoned approval of expenses and suppliers'}
            {lang === 'SW' && 'Uidhinishwaji wa gharama na usambazaji'}
          </Li>
          <Li>
            {lang === 'ES' && <Link href="https://maisharoots.org/img/docs/Control_de_donaciones-Maisha_Roots.pdf">Control de Donaciones</Link>}
            {lang === 'EN' && 'Donations control'}
            {lang === 'SW' && 'Udhibiti wa michango'}
          </Li>
          <Li>
            {lang === 'ES' && 'Cumplimiento de la normativa vigente en materia de protección de datos'}
            {lang === 'EN' && 'Compliance with regulations in force on data protection'}
            {lang === 'SW' && 'Kuzingatia kanuni zinazohusu ulinzi wa taharifa'}
          </Li>
          <Li>
            {lang === 'ES' && 'Canal de Denuncias'}
            {lang === 'EN' && 'Complaints channel'}
            {lang === 'SW' && 'Malalamiko ya kituo'}
          </Li>
        </ul>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Y, por ello, hemos creado una serie de documentos con naturaleza de cuerpo normativo para el desempeño de cualquier acción en el seno de la Asociación Maisha Roots Spain que aplica a:'}
          {lang === 'EN' && 'Therefore, we have created some documents as a regulatory body for the performance of any action taken within the organization which applies to:'}
          {lang === 'SW' && 'Kwa hivyo, tumeunda hati zingine kama chombo cha udhibiti wa utekelezaji wa hatua yoyote iliyochukuliwa ndani ya shirika ambayo inatumika kwa:'}
        </Paragraph>

        <ol>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
        </ol>

        <Paragraph>
          {lang === 'ES' && ''}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Paragraph>

        <Subtitle isSmall>
          {lang === 'ES' && ''}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && <></>}
          {lang === 'EN' && <></>}
          {lang === 'SW' && <></>}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && <></>}
          {lang === 'EN' && <></>}
          {lang === 'SW' && <></>}
        </Paragraph>

      </SubSection>

      <SubSection id="reports">
        <Subtitle>
          {lang === 'ES' && ''}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && <></>}
          {lang === 'EN' && <></>}
          {lang === 'SW' && <></>}
        </Paragraph>
      </SubSection>

      <SubSection id="entities">
        <Subtitle>
          {lang === 'ES' && ''}
          {lang === 'EN' && ''}
          {lang === 'SW' && ''}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && <></>}
          {lang === 'EN' && <></>}
          {lang === 'SW' && <></>}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default TransparencySection
