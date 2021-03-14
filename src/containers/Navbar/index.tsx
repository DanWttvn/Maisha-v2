import React, { useState, FC } from 'react'
import { Link } from 'react-router-dom'
import Styled, { Bars, Cross, ItemsWrapper } from './styles'
import NavItem from '../../components/NavItem'
import Image from '../../components/Image'


export const Navbar: FC = () => {
  const [ activeItem, setActiveItem ] = useState('who')

  //todo: en las secciones id={'section1'}
  //todo: que baje

  //* Responsive

  return (
    <Styled>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Image styles={{ width: 200 }} src="./images/logo.png" />
      </Link>

      {/* <Bars /> */}
      <ItemsWrapper >
        {/* <Cross /> */}
        <NavItem sectionId='who' 
          onClick={setActiveItem.bind(undefined, 'who')} 
          isActive={activeItem === 'who'} 
          subItemsData={[{ name: 'CONÓCENOS', url: '/#know-us' }, { name: 'DÓNDE TRABAJAMOS', url: '/#where' }]}
        >QUIÉNES SOMOS</NavItem>

        <NavItem sectionId='where' onClick={setActiveItem.bind(undefined, 'where')} isActive={activeItem === 'where'} subItemsData={[{ name: 'CONÓCENOS', url: '/#know-us' }, { name: 'DÓNDE TRABAJAMOS', url: '/#where' }]}>DE DONDE VENIMOS</NavItem>


      </ItemsWrapper>
      
    </Styled>
  )
}

export default Navbar
