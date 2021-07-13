import React, { useState, FC, useContext } from 'react'
import Styled, { Bars, Cross, ItemsWrapper } from './styles'
import NavItem from '../../components/NavItem'
import ScrollLink from '../../components/ScrollLink'
import Image from '../../components/Image'
import LanguageContext from '../../contexts/language'
import { SubSectionTitle, SectionTitle } from '../../models'

interface SectionData {
  id: SectionTitle
  title: { ES: string, EN: string, SW: string }
  subsections?: {
    id: SubSectionTitle
    title: { ES: string, EN: string, SW: string }
  }[]
}

export const Navbar: FC = () => {
  const { lang } = useContext(LanguageContext)
  const [ isOpen, setIsOpen ] = useState(false)

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)
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

  const items = sectionsData.map(section => {
    const subItems = section.subsections?.map(subSection => { return { name: subSection.title[lang], section: subSection.id } })

    return (
      <NavItem
        sectionId={section.id}
        key={section.id}
        subItemsData={subItems}
        onOpen={handleOpen}
      >
        {section.title[lang]}
      </NavItem>
    )
  })

  return (
    <Styled isOpen={isOpen}>
      <ScrollLink to="header" offset={0}>
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </ScrollLink>
      {/* <Bars /> */}
      {/* <Cross /> */}
      <ItemsWrapper>{items}</ItemsWrapper>
    </Styled>
  )
}

export default Navbar
