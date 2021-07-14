import React, { useState, FC, useContext } from 'react'
import NavItem from '../../components/NavItem'
import ScrollLink from '../../components/ScrollLink'
import Link from '../../components/Link'
import Image from '../../components/Image'
import LanguageContext from '../../contexts/language'
import { urls } from '../../routes'
import { SubSectionTitle, SectionTitle, BaseProps } from '../../models'
import Styled, { Hamburger, Cross, ItemsWrapper, Menu, Backdrop } from './styles'

interface Props extends BaseProps {
  isHomePage?: boolean
}

export const Navbar: FC<Props> = ({ isHomePage }) => {
  const { lang } = useContext(LanguageContext)
  const [ isDesktopOpen, setIsDesktopOpen ] = useState(false)
  const [ isResponsiveOpen, setIsResponsiveOpen ] = useState(false)

  const handleOpen = (isOpen: boolean) => {
    setIsDesktopOpen(isOpen)
  }

  const handleClick = () => {
    if (isResponsiveOpen) setIsResponsiveOpen(false)
  }

  const items = sectionsData.map(section => {
    const subItems = section.subsections?.map(subSection => { return { name: subSection.title[lang], section: subSection.id } })

    return (
      <NavItem
        sectionId={section.id}
        key={section.id}
        subItemsData={subItems}
        onOpen={handleOpen}
        onClick={handleClick}
        isHomePage={isHomePage}
      >
        {section.title[lang]}
      </NavItem>
    )
  })

  return (
    <Styled isOpen={isDesktopOpen}>
      <ScrollLink to="header" offset={0} isHidden={!isHomePage}>
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </ScrollLink>
      <Link href={urls.root} isHidden={isHomePage} target="">
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </Link>

      <Hamburger onClick={setIsResponsiveOpen.bind(undefined, true)}/>

      <ItemsWrapper>
        <Backdrop onClick={setIsResponsiveOpen.bind(undefined, false)} isResponsiveOpen={isResponsiveOpen}/>
        <Cross onClick={setIsResponsiveOpen.bind(undefined, false)} isResponsiveOpen={isResponsiveOpen}/>
        <Menu isResponsiveOpen={isResponsiveOpen}>{items}</Menu>
      </ItemsWrapper>
    </Styled>
  )
}

interface SectionData {
  id: SectionTitle
  title: { ES: string, EN: string, SW: string }
  subsections?: {
    id: SubSectionTitle
    title: { ES: string, EN: string, SW: string }
  }[]
}

const sectionsData: SectionData[] = [
  {
    id: 'about',
    title: {
      ES: 'Quiénes somos',
      EN: 'Who we are',
      SW: 'Sisi ni nani'
    },
    subsections: [
      {
        id: 'know-us',
        title: {
          ES: 'Conócenos',
          EN: 'Know us',
          SW: 'Kutufahamu'
        }
      },
      {
        id: 'where',
        title: {
          ES: 'Dónde trabajamos',
          EN: 'Where we work',
          SW: 'Tunafanya kazi wapi'
        }
      },
      {
        id: 'context',
        title: {
          ES: 'Nuestro contexto',
          EN: 'Our context',
          SW: 'Muktadha wetu'
        }
      }
    ],
  },
  {
    id: 'timeline',
    title: {
      ES: 'De dónde venimos',
      EN: 'Where we come from',
      SW: 'Tumetoka wapi'
    }
  },
  {
    id: 'how-work',
    title: {
      ES: 'Cómo trabajamos',
      EN: 'How we work',
      SW: 'Fanya Kazi'
    },
    subsections: [
      {
        id: 'structure',
        title: {
          ES: 'Estructura',
          EN: 'Structure',
          SW: 'Muundo'
        }
      },
      {
        id: 'collaborators',
        title: {
          ES: 'Colaboradoras/es',
          EN: 'Collaborators',
          SW: 'Washirika'
        }
      }
    ]
  },
  {
    id: 'projects',
    title: {
      ES: 'Qué hacemos',
      EN: 'What we do',
      SW: 'Tunafanya nini'
    }
  },
  {
    id: 'collaborate',
    title: {
      ES: 'Colabora',
      EN: 'Collaborate',
      SW: 'Shiriki',
    },
    subsections: [
      {
        id: 'volunteering',
        title: {
          ES: 'Voluntariado',
          EN: 'Volunteers',
          SW: 'Kujitolea'
        }
      },
      {
        id: 'donate',
        title: {
          ES: 'Donaciones',
          EN: 'Donations',
          SW: 'Changia'
        }
      },
      {
        id: 'entities',
        title: {
          ES: 'Entidades',
          EN: 'Partners',
          SW: 'Washirika'
        }
      }
    ]
  },
  {
    id: 'transparency',
    title: {
      ES: 'Transparencia',
      EN: 'Transparency',
      SW: 'Uwazi Gharama',
    },
    subsections: [
      {
        id: 'good-practices',
        title: {
          ES: 'Buen gobierno',
          EN: 'Good governance',
          SW: 'Utawala bora'
        },
      },
      {
        id: 'reports',
        title: {
          ES: 'Memorias',
          EN: 'Reports',
          SW: ''
        }
      }
    ]
  }
]

export default Navbar
