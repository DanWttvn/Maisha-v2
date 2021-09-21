import React, { FC, useContext } from 'react'
import AppLink from '../../components/AppLink'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import LanguageContext from '../../contexts/language'
import { Section, SubSection } from '../../components/Section/styles'
import { SectionProps } from '../../models'
import Li from '../../components/Li'
import ExternalLink from '../../components/ExternalLink'
import { urls } from '../../routes'

export const TransparencySection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id="transparency">
      <Title firstPart={(lang === 'ES' && 'TRANSPARENCIA') || (lang === 'EN' && 'TRANSPARENCY') || (lang === 'SW' && 'UWAZI GHARAMA') || ''} isSmall/>
      <SubSection id="good-practices">
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
            {lang === 'ES' && <ExternalLink href="/images/docs/Mecan%C3%ADsmo_de_gesti%C3%B3n_de_conflictos_de_inter%C3%A9s-Maisha_Roots.pdf">Gestión de conflictos de interés en el órgano de gobierno</ExternalLink>}
            {lang === 'EN' && 'Management of conflicts of interest in the Management team'}
            {lang === 'SW' && 'Usimamizi wa migogoro ya kimaslahi katika timu ya usimamizi'}
          </Li>
          <Li>
            {lang === 'ES' && <ExternalLink href="/images/docs/Criterios_de_selecci%C3%B3n_de_colaboradores_y_contrapartes-Maisha_Roots.pdf">Selección responsable de contrapartes y colaboradores</ExternalLink>}
            {lang === 'EN' && 'Responsible selection of partners and collaboration'}
            {lang === 'SW' && 'Uwajibikaji wa uteuzi wa washirika'}
          </Li>
          <Li>
            {lang === 'ES' && <ExternalLink href="/images/docs/Aprobaci%C3%B3n_de_gastos_y_selecci%C3%B3n_de_proveedores-Maisha_Roots.pdf">Aprobación razonada de gastos y proveedores</ExternalLink>}
            {lang === 'EN' && 'Reasoned approval of expenses and suppliers'}
            {lang === 'SW' && 'Uidhinishwaji wa gharama na usambazaji'}
          </Li>
          <Li>
            {lang === 'ES' && <ExternalLink href="/images/docs/Control_de_donaciones-Maisha_Roots.pdf">Control de Donaciones</ExternalLink>}
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
        <ol style={{ marginBottom: 16 }}>
          <Li>
            {lang === 'ES' && 'Miembros de la Asamblea General'}
            {lang === 'EN' && 'Members of the General Assembly'}
            {lang === 'SW' && 'Mwanachama wa mkutano mkuu'}
          </Li>
          <Li>
            {lang === 'ES' && 'Junta Directiva'}
            {lang === 'EN' && 'Management team'}
            {lang === 'SW' && 'Timu ya usimamizi'}
          </Li>
          <Li>
            {lang === 'ES' && 'Personal empleado'}
            {lang === 'EN' && 'Employees'}
            {lang === 'SW' && 'Wafanyakazi'}
          </Li>
          <Li>
            {lang === 'ES' && 'Personal voluntario'}
            {lang === 'EN' && 'Volunteers'}
            {lang === 'SW' && 'Watu wa kujitolea'}
          </Li>
        </ol>
        <Paragraph>
          {lang === 'ES' && 'Todos estos miembros asumen el cumplimiento de estos principios de forma automática, al comenzar a formar parte de la Asociación.'}
          {lang === 'EN' && 'All these members assume the accomplishment of these principles automatically, in their date of commencement within the organization.'}
          {lang === 'SW' && 'Wanachama hawa wote wanadhana timilifu ya kanuni hizi moja kwa moja, katika tarehe yao ya kuanza ndani ya shirika.'}
        </Paragraph>

        <Subtitle isSmall isFullWidth>
          {lang === 'ES' && 'Canal de denuncias'}
          {lang === 'EN' && 'Complaints channel'}
          {lang === 'SW' && 'Malalamiko ya kituo'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && <>Con el fin de cumplir con nuestro compromiso con la transparencia y el buen gobierno, Maisha Roots pone a disposición del personal empleado y voluntario, donantes, proveedores, colaboradores, etc. un canal de denuncias que permita identificar conductas irregulares en el seno la Asociación. Estas conductas irregulares incluyen cualquier acción ilegal, irregular o contraria a las normas – tanto externas como internas - llevada a cabo por la Asociación Maisha Roots o por cualquiera de sus miembros. En el siguiente enlace puedes encontrar el documento normativo de nuestro canal de denuncias: Canal de Denuncias.</>}
          {lang === 'EN' && <>With the aim of accomplishing our commitment with transparency and good governance, Maisha Roots makes available to the employed and volunteering staff, donors, suppliers, partners, etc. a complaints channel that allows us to identify irregular behavior within the organization. This irregular behavior includes any illegal action, irregular or against law- both intern and extern- undertaken by the organization Maisha Roots or any of its members. In this link you might find the related document to our complaints channel: Complaints channel.</>}
          {lang === 'SW' && <>Kwa kusudi la kukamilisha kujitolea kwetu kwa uwazi na utawala bora, Maisha Roots hutengeneza wafanyakazi walioajiriwa, wafadhili, wauzaji, washirika, n.k. njia ya malalamiko ambayo inaruhusu tabia isiyo ya kawaida inajumuisha hatua yoyote haramu, isiyo ya kawaida au dhidi ya sharia zote za ndani na nje zinazofanywa na shirika Maisha Roots au mtu yeyote wa washiriki wake. Kwenye kiunga hiki unaeza kupata hati inayohusiana na kituo chetu cha malalamiko: kituo cha malalamiko.</>}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && <>Para establecer tu denuncia, puedes rellenar las indicaciones del documento, o rellenar <AppLink toPage={urls.complains}>este formulario</AppLink> o envía <ExternalLink href="/images/docs/Canal_de_denuncias-Maisha_Roots.pdf">esta ficha rellena</ExternalLink> a la dirección de correo electrónico <ExternalLink href="mailto:info@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
          {lang === 'EN' && <>To present your complaint, you might fill in the indications in the document, or fill in <AppLink toPage={urls.complains}>this form</AppLink> or send <ExternalLink href="/images/docs/Canal_de_denuncias-Maisha_Roots.pdf">this completed draft</ExternalLink> to the email address <ExternalLink href="mailto:info@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
          {lang === 'SW' && <>Ili kuwasilisha malalamiko yako, unaweza kujaza dalili kwenye hati, au ujaze <AppLink toPage={urls.complains}>fomu hii</AppLink>, au utume <ExternalLink href="/images/docs/Canal_de_denuncias-Maisha_Roots.pdf">rasimu hii iliyosimamiwa</ExternalLink> kwa anwani ya barua pepe <ExternalLink href="mailto:info@maisharoots.org">canaldenuncias@maisharoots.org</ExternalLink></>}
        </Paragraph>
      </SubSection>

      <SubSection id="reports">
        <Subtitle>
          {lang === 'ES' && 'Cuentas y memorias de actividades'}
          {lang === 'EN' && 'Accounting and reports of activities'}
          {lang === 'SW' && 'Uhasibu na ripoti za shughuli'}
        </Subtitle>

        <Paragraph isFullWidth>
          {lang === 'ES' && 'Dossier 2017'}
          {lang === 'EN' && 'Dossier 2017'}
          {lang === 'SW' && 'Dossier 2017'}
          <ExternalLink href="/images/docs/Dossier_es_2017-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
          <ExternalLink href="/images/docs/Dossier_en_2017-MR.pdf">ENG</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Memoria de Actividades 2017'}
          {lang === 'EN' && 'Report of Activities 2017'}
          {lang === 'SW' && 'Ripoti ya Shughuli 2017'}
          <ExternalLink href="/images/docs/Memoria_de_Actividades2016-2017-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Dossier 2018'}
          {lang === 'EN' && 'Dossier 2018'}
          {lang === 'SW' && 'Dossier 2018'}
          <ExternalLink href="/images/docs/Dossier_es_2018-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
          <ExternalLink href="/images/docs/Dossier_en_2018-MR.pdf">ENG</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Memoria de Actividades 2018'}
          {lang === 'EN' && 'Report of Activities 2018'}
          {lang === 'SW' && 'Ripoti ya Shughuli 2018'}
          <ExternalLink href="/images/docs/Memoria_de_Actividades2017-2018-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Memoria actividades 2019'}
          {lang === 'EN' && 'Report of Activities 2019'}
          {lang === 'SW' && 'Ripoti ya Shughuli 2019'}
          <ExternalLink href="/images/docs/Memoria_de_Actividades2019-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Memoria actividades 2020'}
          {lang === 'EN' && 'Report of Activities 2020'}
          {lang === 'SW' && 'Ripoti ya Shughuli 2020'}
          <ExternalLink href="/images/docs/Memoria_de_Actividades2020-MR.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Estatutos Maisha Roots Spain'}
          {lang === 'EN' && 'Maisha Roots Spain Constitution'}
          {lang === 'SW' && 'Katiba ya Maisha Roots Spain'}
          <ExternalLink href="/images/docs/estatutos-Maisha_Roots_Spain.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Constitución FYWCO'}
          {lang === 'EN' && 'FYWCO Constitution'}
          {lang === 'SW' && ''}
          <ExternalLink href="/images/docs/FYWCO_constitution.pdf" styles={{ margin: '0 4px' }}>ENG</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Memorandum of Understanding'}
          {lang === 'EN' && 'Memorandum of Understanding'}
          {lang === 'SW' && 'Memorandum of Understanding'}
          <ExternalLink href="/images/docs/MOU-FYWCO_MRS.pdf" styles={{ margin: '0 4px' }}>ENG</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Plan de voluntariado'}
          {lang === 'EN' && 'Volunteer Plan'}
          {lang === 'SW' && ''}
          <ExternalLink href="/images/docs/plan_de_voluntariado-Maisha_Roots.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
        <Paragraph isFullWidth>
          {lang === 'ES' && 'Utilidad Pública Maisha Roots Spain'}
          {lang === 'EN' && 'Maisha Roots Spain Public Utility'}
          {lang === 'SW' && ''}
          <ExternalLink href="/images/docs/utilidad_publica.pdf" styles={{ margin: '0 4px' }}>ESP</ExternalLink>
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default TransparencySection
