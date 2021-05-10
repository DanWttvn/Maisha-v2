import React, { FC, useContext } from 'react'
import Image from '../../components/Image'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import Paragraph from '../../components/Paragraph'
import Styled, { SubSection, Card } from './styles'
import Text from '../../components/Text'
import theme from '../../styles/theme'
import LanguageContext from '../../contexts/language'

interface Props {
  id?: string
}

export const WhoSection: FC<Props> = ({ id }) => {
  const { lang } = useContext(LanguageContext)

  return (
    <Styled id={id}>
      <Title 
        firstPart={(lang === 'ES' && 'QUIÉNES') || (lang === 'EN' && 'WHO') || (lang === 'SW' && 'SISI') || ''}
        secondPart={(lang === 'ES' && 'SOMOS') || (lang === 'EN' && 'ARE WE') || (lang === 'SW' && 'NI NANI') || ''}
      />
      <SubSection hasFullWidth styles={{ height: 600, boxSizing: 'content-box', fontSize: '1.2rem', fontWeight: 500 }}>
        <Subtitle color='white' styles={{ fontSize: '3em' }}>
          { lang === 'ES' && 'Conócenos' }
          { lang === 'EN' && 'Get to know us' }
          { lang === 'SW' && 'Pata kutufahamu' }
        </Subtitle>
        <Paragraph color='white'>
          { lang === 'ES' && 'Maisha Roots es una ONG que aúna los esfuerzos de dos entidades, una española (Maisha Roots Spain) y otra tanzana (FYWCO, Focus for Youth, Woman and Children Organization), con el fin de fomentar el desarrollo en Tanzania.' }
          { lang === 'EN' && 'Maisha Roots is an NGO that combines the efforts of two entities, a Spanish one (Maisha Roots Spain) and a Tanzanian one (FYWCO, Focus for Youth, Woman and Children Organization), with the common goal of fostering development in Tanzania.' }
          { lang === 'SW' && 'Maisha Roots ni Shirika Lisilo La Kiserikali ambalo linalounganisha nguvu za taasisi mbili Moja ya Uhispania (Maisha Roots Spain) na nyingine ya Tanzania (Focus for youth, women and children organisation kwa lengo la Pamoja la kuchochea maendeleo Tanzania.' }
        </Paragraph>
        <Paragraph color='white'>
          { lang === 'ES' && 'Nace de la decisión locºal de establecer un tejido comunitario fértil a través del cual lograr el desarrollo de la comunidad en la que trabajamos.' }
          { lang === 'EN' && 'Its origins are found in the local decision of establishing a prosperous community to achieve the development of the community where we work.' }
          { lang === 'SW' && 'Imezaliwa kutokana na maamuzi ya wenyeji kwa lengo la kuiboresha jamii tunayoifanyia kazi kimaendeleo.' }
        </Paragraph>
        <Image src="/images/playing_kids.jpg" styles={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: -1, background:	'linear-gradientrgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))' }} />
      </SubSection>

      <SubSection>
        <Subtitle>
          { lang === 'ES' && 'Misión, Visión y Áreas de actuación' }
          { lang === 'EN' && 'Mission, Vision and Action areas' }
          { lang === 'SW' && 'Malengo, Matarajio na Maeneo ya kimkakati' }
        </Subtitle>
        <Paragraph >
          { lang === 'ES' && 'Maisha Roots cree en la cooperación al desarrollo como forma de acompañamiento y empoderamiento local, siempre a través de un enfoque participativo. Por ello, nuestra misión se centra en la mejora de la calidad de vida de sus beneficiarios en las áreas de medios de vida y educación, teniendo en cuenta que para ello es necesario promover también otras áreas.' }
          { lang === 'EN' && 'Maisha roots believes in development cooperation as a tool of accompaniment and local empowerment, always through a participative approach. Thus, our mission focuses on the improvement of the life quality of its beneficiaries in the areas of livelihood and education. We also consider that, in order to achieve it, it is also necessary to promote other areas.' }
          { lang === 'SW' && 'Maisha Roots inaamini katika ushirikiano katika maendeleo na uwezeshwaji wa jamii, daima kupitia njia shirikishi. Kwa hivyo, malengo yetu yanazingatia uboreshaji wa hali ya maisha ya wanufaika katika nyanja za kijamii na elimu. Tunazingatia pia kuwa, ili kufanikisha, ni muhimu kukuza nyanja zingine pia.' }
        </Paragraph>
        <Paragraph>
          { lang === 'ES' && <>El nombre Maisha Roots procede de la palabra swahili<Text weight="black"> ‘maisha’</Text>, que significa vida, y de la palabra inglesa<Text weight="black"> ‘roots’</Text>, que significa raíces formando la expresión ‘raíces de vida’. Y representa los dos pilares de actuación de la organización: la educación y los medios de vida.</> }
          { lang === 'EN' && <>The name Maisha Roots comes from the Swahili word<Text weight="black"> ‘maisha’</Text>, which means life, and the English word<Text weight="black"> ‘roots’</Text>, forming the expression ‘life roots’. It represents the two main action pillars of the organization: education and livelihood.</> }
          { lang === 'SW' && <>Jina Maisha Roots linatokana na neno la Kiswahili ‘<Text weight="black"> ‘maisha’</Text>, na neno la Kingereza<Text weight="black"> ‘roots’ </Text>(mzizi), huunda usemi ‘Maisha Roots’. Inawakilisha nguzo kuu mbili za shirika: elimu na uinuaji wa maisha.</> }
        </Paragraph>
        <Paragraph>
          { lang === 'ES' && 'Creemos que el desarrollo de las personas y de las comunidades está estrechamente ligado con los medios de vida y la educación, por lo que ambas áreas constituyen los pilares de actuación de la organización.' }
          { lang === 'EN' && 'We have chosen livelihood and education to be our core action areas because we believe the development of people and communities is closely linked to both of them.' }
          { lang === 'SW' && 'Tumechagua uinuaji wa maisha na elimu kuwa maeneo yetu ya hatua za msingi kwasababu tunaamini maendeleo ya watu na jamii yote kwa pamoja yanauhusiano wa karibu.' }
        </Paragraph>
        <Paragraph>
          { lang === 'ES' && <>Entendemos<Text weight="black"> ‘medios de vida’ </Text>como toda aquella actividad que desarrolla el aspecto productivo de una persona, a través de la cual obtiene experiencia y remuneración. Y entendemos la<Text weight="black"> ‘educación’ </Text>como toda formación destinada a desarrollar la capacidad intelectual, moral y afectiva de una persona y como el derecho de toda la ciudadanía a una enseñanza básica gratuita.</> }
          { lang === 'EN' && <>We understand<Text weight="black"> ‘livelihood’ </Text>as every activity developing the productive aspect of a person, through which the person obtains experience and remuneration. We understand <Text weight="black"> ‘education’ </Text>as every training or formation dedicated to developing the intellectual, moral, and affective capacity of a person as well as the civil right to receive basic and free education.</> }
          { lang === 'SW' && <>Tunaelewa<Text weight="black"> ‘uinuaji wa maisha’ </Text>kama kila shughuli inayokuza hali ya uchumi wa mtu, ambayo kupitia yeye mtu hupata uzoefu na ujira. Tunaelewa<Text weight="black"> ‘elimu’ </Text>kama mafunzo yote yanayolenga kumletea maendeleo mtu kifikra, kimaadili na uwezo wa kihisia kama haki ya kila raia kupata elimu ya msingi na ya bure.</> }
        </Paragraph>
        <Paragraph styles={{ borderLeft: `10px solid ${theme.colors.offRed}`, paddingLeft: 40 }}>
          { lang === 'ES' && <>Los medios de vida y la educación son herramientas que contribuyen a la <Text weight="black"> autonomía, independencia y empoderamiento </Text>de las personas. Además, a través de los medios de vida y de la educación se consolidan valores, dinámicas e iniciativas que responden a las demandas y deseos de la población. Por ello, Maisha Roots se centra en fomentar la capacidad y los recursos pertinentes para la<Text weight="black"> construcción del bienestar común, la evolución y el desarrollo.</Text></> }
          { lang === 'EN' && <>Livelihood and education are two tools that contribute to the<Text weight="black"> autonomy, independence, and empowerment </Text>of people. Moreover, education and livelihood strengthen values, dynamics, and initiatives that answers other population demands and wishes. Therefore, Maisha Roots focuses on fostering the capacity and resources for the<Text weight="black"> construction of common well-being, evolution, and development.</Text></> }
          { lang === 'SW' && <>Uinuaji wa maisha na elimu ni zana mbili ambazo zinachangia<Text weight="black"> uhuru, kujitegemea na uwezeshaji </Text>wa watu. Kwa kuongezea, elimu na uinuaji wa maisha huimarisha maadili na mipango ambayo inajibu mahitaji na matakwa ya watu wengine. Kwa hivyo, Maisha Roots inalenga katika kukuza uwezo na rasilimali kwaajili ya<Text weight="black"> ujenzi wa ustawi wa kawaida, uvumbuzi na maendeleo.</Text></> }
        </Paragraph>
      </SubSection>

      <SubSection hasFullWidth>
        <Subtitle color='black' >
          { lang === 'ES' && 'Dónde trabajamos' }
          { lang === 'EN' && 'Where do we work' }
          { lang === 'SW' && 'Tunafanya kazi wapi' }
        </Subtitle>
        <Card>
          <Subtitle isSmall color="white">
            { lang === 'ES' && 'España' }
            { lang === 'EN' && 'Spain' }
            { lang === 'SW' && 'Uhispania' }
          </Subtitle>
          <Paragraph color='white'>
            { lang === 'ES' && 'Desde España intentamos reforzar la labor que se lleva a cabo en Tanzania. Creamos puentes culturales a través de programas de sensibilización (principalmente en centros educativos) y realizamos actividades de recaudación de fondos para financiar los proyectos de Tanzania. Nuestra acción y parte del programa de voluntariado se desarrollan, mayoritariamente, en la Comunidad de Madrid, aunque también se llevan a cabo actividades en otras comunidades autónomas, especialmente en Cataluña, donde también contamos con una delegación.' }
            { lang === 'EN' && 'In Spain, we try to reinforce the work carried out in Tanzania. We create cultural bridges through sensitization programs (especially in educational centers) and we develop fundraising activities to raise funds for our projects in Tanzania. Our action and part of our volunteering program are developed in the Comunidad de Madrid, though we also develop some activities in other communities, especially Cataluña, where we also have opened a delegation.' }
            { lang === 'SW' && 'Uhispania, tunajaribu kuimarisha kazi inayofanywa nchini Tanzania. Tunaunda madaraja ya kitamaduni kupitia program za uhamasishaji (haswa katika vituo vya elimu) na tunaendeleza shughuli za kutafuta fedha za kuinua mapato kwa miradi yetu Tanzania. Shughuli zetu na sehemu ya programu yetu ya kujitolea imekuzwa katika eneo la Comunidad de Madrid, ingawa sisi pia huendeleza shughuli nyingine katika jamii zingine, haswa Cataluna, ambapo pia tumefungua ujumbe.' }
          </Paragraph>
        </Card>
        <Card>
          <Subtitle isSmall color="white">Tanzania</Subtitle>
          <Paragraph color='white'>
            { lang === 'ES' && 'Actualmente, desarrollamos nuestra actividad en la ciudad de Arusha, al norte de Tanzania, aunque no descartamos expandir nuestras acciones por otras zonas del país. Aquí es donde se desarrollan los proyectos de cooperación al desarrollo y los programas de voluntariado.' }
            { lang === 'EN' && 'Nowadays, we develop our activities and projects in Arusha, a city in the north of Tanzania, even though we do not rule out expanding our actions in other areas of the country. Here is where we develop our development projects and volunteering program..' }
            { lang === 'SW' && 'Siku hizi, tunaendeleza shughuli na miradi yetu Arusha, jiji lililopo kaskazini mwa Tanzania, ingawa hatujajiekea mipaka ya kuendelea kukua na kugusa sehemu zingine za nchi. Hapa ndipo tunapoendeleza miradi yetu ya maendeleo na program za kujitolea.' }
          </Paragraph>
        </Card>
      </SubSection>

      <SubSection>
        <Subtitle>
          { lang === 'ES' && 'Nuestro contexto' }
          { lang === 'EN' && 'Our context' }
          { lang === 'SW' && 'Muktadha wetu' }
        </Subtitle>
        <Paragraph>
          { lang === 'ES' && <>Desde 2016, Maisha Roots desarrolla y colabora con proyectos de raíces locales en<Text isHighlighted> Tanzania</Text>, y más concretamente, en la ciudad de<Text isHighlighted> Arusha</Text>.</> }
          { lang === 'EN' && <>From 2016, Maisha Roots is developing and collaborating with projects with<Text isHighlighted> Tanzanian Roots</Text>, specifically, in the city of<Text isHighlighted> Arusha</Text>.</> }
          { lang === 'SW' && <> Kutokea 2016, Maisha Roots imekuwa na kushirikiana na miradi ya mizizi ya <Text isHighlighted> Tanzania</Text>haswa katika mji wa<Text isHighlighted> Arusha</Text>.</> }
        </Paragraph>
        <Paragraph>
          { lang === 'ES' && <>A pesar de que, desde su independencia, Tanzania ha disfrutado de<Text isHighlighted>  estabilidad política y paz, </Text>esto no se ha traducido en un mejor nivel de vida para la mayoría de la población.</> }
          { lang === 'EN' && <>Although, since its independence, Tanzania has enjoyed<Text isHighlighted> political stability and peace, </Text> this has not meant a better level of life for most of its population.</> }
          { lang === 'SW' && <>Ijapokuwa, tangu uhuru wa Tanzania imefurahia kwa kuwa na <Text isHighlighted> utulivu wa kisiasa na amani, </Text> hii haimanishi kiwango bora cha maisha kwa wakazi wake wengi.</> }
        </Paragraph>
      </SubSection>
    </Styled>
  )
}

export default WhoSection
