import React, { useState, FC, useContext } from 'react'
import { Link } from 'react-scroll'
import Styled, { Bars, Cross, ItemsWrapper } from './styles'
import NavItem from '../../components/NavItem'
import Image from '../../components/Image'
import LanguageContext from '../../contexts/language'


type Id = {
  id: string
  title: { ES: string, EN: string, SW: string }
}

interface SectionData extends Id {
  subsections?: Id[]
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
        EN: '',
        SW: ''
      },
      subsections: [
        {
          id: 'know-us',
          title: {
            ES: 'Conócenos',
            EN: '',
            SW: ''
          }
        },
        {
          id: 'where',
          title: {
            ES: 'Dónde trabajamos',
            EN: '',
            SW: ''
          }
        },
        {
          id: 'context',
          title: {
            ES: 'Nuestro contexto',
            EN: '',
            SW: ''
          }
        }
      ],
    },
    {
      id: 'timeline',
      title: {
        ES: 'De dónde venimos',
        EN: '',
        SW: ''
      }
    },
    {
      id: 'structure',
      title: {
        ES: 'Cómo trabajamos',
        EN: '',
        SW: ''
      },
      subsections: [
        {
          id: 'structure',
          title: {
            ES: 'Estructura',
            EN: '',
            SW: ''
          }
        },
        {
          id: 'collaborators',
          title: {
            ES: 'Colaboradoras/es',
            EN: '',
            SW: ''
          }
        }
      ]
    },
    {
      id: 'projects',
      title: {
        ES: 'Qué hacemos',
        EN: '',
        SW: ''
      }
    },
    {
      id: 'collaborate',
      title: {
        ES: 'Colabora',
        EN: '',
        SW: '',
      },
      subsections: [
        {
          id: 'collaborate',
          title: {
            ES: 'Voluntariado',
            EN: '',
            SW: ''
          }
        },
        {
          id: 'donate',
          title: {
            ES: 'Donaciones',
            EN: '',
            SW: ''
          }
        },
        {
          id: 'entities',
          title: {
            ES: 'Entidades',
            EN: '',
            SW: ''
          }
        }
      ]
    },
    {
      id: 'transparency',
      title: {
        ES: 'Transparencia',
        EN: '',
        SW: '',
      },
      subsections: [
        {
          id: 'transparency',
          title: {
            ES: 'Buen gobierno',
            EN: '',
            SW: ''
          },
        },
        {
          id: 'reports',
          title: {
            ES: 'Memorias',
            EN: '',
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
      <Link to="header" style={{ marginTop: 16 }}>
        <Image styles={{ width: 200 }} src="./images/logo.png" />
      </Link>
      {/* <Bars /> */}
      {/* <Cross /> */}
      <ItemsWrapper>{items}</ItemsWrapper>
    </Styled>
  )
}

export default Navbar
